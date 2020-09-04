import * as PIXI from 'pixi.js';
import { images, BASE_CANVAS_WIDTH, BASE_CANVAS_HEIGHT, BASE_LOGO_Y, logoDatas } from './ImageData'
import type { BasePIXIInformation, BaseImageInformation, RGBA, LogoInformation, AnimationContainer } from './ImageData'

const drawImages = (divContainer: HTMLDivElement) => {
  const width = Math.floor(divContainer.clientWidth) - 1
  const scale = Math.min(width / BASE_CANVAS_WIDTH, 1.0)
  const speed = BASE_CANVAS_WIDTH * scale / 50

  // PIXIの準備
  const app = new PIXI.Application({
    width: Math.min(width, BASE_CANVAS_WIDTH),
    height: BASE_CANVAS_HEIGHT * scale,
    transparent: true
  })
  divContainer.appendChild(app.view)

  const rootContainer = new PIXI.Container()

  const charactorContainers = setupCharactorContainer(images, scale)
  const [ryohaContainer, infinityContainer] = setupLogos(logoDatas, scale)
  addChildrenToContainer(rootContainer, [ryohaContainer, infinityContainer, ...charactorContainers].map(v => v.container))

  let isReachTop = charactorContainers.map(_ => false)
  let isAllAnimationFinished = charactorContainers.map(_ => false)
  // アニメーションの追加
  app.ticker.add((d) => {
    if (isAllAnimationFinished.reduce((acc, cur) => acc && cur)) {
      for (const chara of charactorContainers) {
        chara.filter.uniforms.time += 0.01 * d
      }
      return
    }
    // まず「りょは」ロゴをスライドイン
    if (ryohaContainer.container.x > ryohaContainer.destination.x) {
      ryohaContainer.container.x -= speed * 1.5
      // 「りょは」ロゴのアニメーションが終わってたら「インフィニティ」ロゴをスライドイン
    } else if (infinityContainer.container.x > infinityContainer.destination.x) {
      infinityContainer.container.x -= speed * 2
      // ロゴのアニメーションが終了してたら各キャラクターをスライドイン
    } else {
      charactorContainers.forEach((chara, i) => {
        if (chara.container.y > chara.destination.y && !isReachTop[i]) {
          chara.container.y -= speed
          chara.container.alpha += 0.2
        } else {
          isReachTop[i] = true
          if (chara.container.y < chara.destination.y + 12) {
            chara.container.y += speed / 4
            chara.container.alpha = 1.0
          } else {
            if (chara.filter) {
              chara.container.filters = [chara.filter]
              chara.filter.uniforms.time += 0.01 * d
              ryohaContainer.container.zIndex = 10
              infinityContainer.container.zIndex = 10
              isAllAnimationFinished[i] = true
            }
          }
        }
      })
    }
  })
  app.stage.addChild(rootContainer);
  return app
}

const getFilter = (rgba: RGBA) => {
  const flag = `
    precision mediump float;

    varying vec2 vTextureCoord;
    varying vec4 vColor;

    uniform sampler2D uSampler;
    uniform float time;

    void main(void)
    {
      vec2 uvs = vTextureCoord.xy;

      vec4 fg = texture2D(uSampler, vTextureCoord);
      
      float top = mod(time, 1.0);
      float bottom =  mod(time - 0.02, 1.0);
      float upper = max(top, bottom);
      float lower = min(top, bottom);

      float coorSum = (1.0 + uvs.x - uvs.y) * 0.5;
      float isColord = step(lower, coorSum);
      isColord *= step(coorSum, upper);
      isColord *= fg.a;
      isColord = step(1.0, isColord);
      isColord = mix(0.0, isColord, step(bottom, top));

      vec4 color = vec4(${getRGBAStr(rgba)});
      fg *= 1.0 - isColord;
      fg = mix(fg, color, step(1.0, isColord));
      gl_FragColor = fg;
    }
  `

  const filter = new PIXI.Filter(null, flag, {
    time: 0.0
  })
  return filter
}

const getRGBAStr = (rgba: [number, number, number, number]) => {
  let str = ''
  rgba.forEach(v => {
    if (Number.isInteger(v)) {
      str += `${v}.0, `
    } else {
      str += `${v}, `
    }
  })
  return str.slice(0, -2)
}

const getSquareContainer = (imgInfo: BaseImageInformation, scale: number) => {
  const img = new Image()
  img.src = imgInfo.src
  img.width = imgInfo.width * scale
  img.height = imgInfo.height * scale

  const sprite = new PIXI.Sprite(PIXI.Texture.from(img))
  sprite.anchor.set(0)
  sprite.x = 0
  sprite.y = 0

  const container = new PIXI.Container()

  container.addChild(sprite)

  return container
}

const getImageContainer = (src: string) => {
  const container = new PIXI.Container()
  const img = new Image()
  img.src = src
  const sprite = new PIXI.Sprite(PIXI.Texture.from(img))
  sprite.anchor.set(0)
  sprite.x = 0
  sprite.y = 0
  container.addChild(sprite)
  return container
}

const setupCharactorContainer = (
  infos: BasePIXIInformation[],
  scale: number,
): AnimationContainer[] => {
  const res: AnimationContainer[] = []
  let i = 1
  for (const info of infos) {
    const filter = getFilter(info.position.flipColor)
    const container = getSquareContainer(info.image, scale)
    container.x = info.position.x * scale
    container.y = (info.position.y + BASE_CANVAS_HEIGHT) * scale * 0.35
    container.zIndex = i
    i += 1
    res.push({
      destination: {
        x: info.position.x * scale,
        y: info.position.y * scale
      },
      container: container,
      filter: filter
    })
    container.alpha = 0
  }
  return res
}

const setupLogos = (
  datas: Map<'ryoha' | 'infinity', LogoInformation>,
  scale: number,
): [AnimationContainer, AnimationContainer] => {
  const ryohaLogo = datas.get('ryoha')
  const ryohaContainer = getLogoContainer(ryohaLogo, scale)

  const infinityLogo = datas.get('infinity')
  const infinityContainer = getLogoContainer(infinityLogo, scale)

  const speed = (BASE_CANVAS_WIDTH * scale - ryohaLogo.destinationX) / 50
  return [{
    container: ryohaContainer,
    destination: {
      x: ryohaLogo.destinationX * scale,
      y: BASE_LOGO_Y * scale
    }
  }, {
    container: infinityContainer,
    destination: {
      x: infinityLogo.destinationX * scale,
      y: BASE_LOGO_Y * scale
    }
  }]
}

const getLogoContainer = (info: LogoInformation, scale: number) => {
  const container = getImageContainer(info.src)
  container.x = BASE_CANVAS_WIDTH * scale
  container.y = BASE_LOGO_Y * scale
  container.scale.x = scale
  container.scale.y = scale
  return container
}

const addChildrenToContainer = (target: PIXI.Container, childrenContainer: PIXI.Container[]) => {
  for (const child of childrenContainer) {
    target.addChild(child)
  }
}

export default drawImages
