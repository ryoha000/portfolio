export interface CharactorData {
  account: string
  name: TextIsColored[]
  src: string
  selif: TextWithColor
  voices: string[]
  cv: string
  detail: string
  url: string
}

interface TextWithColor {
  text: string
  color: [number, number, number, number]
}

interface TextIsColored {
  text: string
  colored: boolean
}

export const charactorDatas: CharactorData[] = [
  {
    account: 'https://trap.jp/author/ryoha/',
    name: 'ryoha'.split('').map(v => ({ text: v, colored: v === 'o'})),
    src: '/assets/sui_right_back_white.png',
    selif: {
      text: '兄さんはいっつもそうです、仕方ない人ですね。',
      color: [84, 84, 84, 1.0]
    },
    voices: ['/assets/桜のあと(all quartets lead to the？).mp3'],
    cv: 'Text-to-Speech',
    detail: '兄思いの妹',
    url: 'https://www.makura-soft.com/sakuranouta/index.html'
  }
]
