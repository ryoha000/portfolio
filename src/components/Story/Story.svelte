<script lang="ts">
  import HeaderLabel from '../UI/HeaderLabel.svelte'

  let width: number
</script>

<style>
  .container {
    transform: rotate(0.03deg);
    font-size: 1.5rem;
    max-width: 1000px;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
  }
  .container.mobile {
    font-size: 0.85rem;
  }
  .strong {
    font-size: 2rem;
  }
  .mobile .strong {
    font-size: 1rem;
  }
  .piropiro {
    background: linear-gradient(45deg, blue, green);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  .earth {
    color: turquoise;
  }
  .universe {
    color: slateblue;
  }
  .silver {
    background: linear-gradient(45deg, #333333, #e2e2e2 50%, #333333);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  .light {
    background: linear-gradient(45deg, rgb(255, 208, 0), rgb(243, 228, 163) 50%, rgb(255, 208, 0));
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 1px #ffbf34;
  }
  .scarlet {
    color: rgb(191, 87, 130);
  }
  .comunication {
    background-image: repeating-radial-gradient(circle at center, #6fb8d9, #70b9da 1.25%, #73bcdd 2.5%, #78c0e1 3.75%, #7fc6e6 5%, #86cdec 6.25%, #8cd3f2 7.5%, #93d9f7 8.75%, #98ddfb 10%, #9be0fe 11.25%, #9ce1ff 12.5%, #9be0fe 13.75%, #98ddfb 15%, #93d9f7 16.25%, #8cd3f2 17.5%, #86cdec 18.75%, #7fc6e6 20%, #78c0e1 21.25%, #73bcdd 22.5%, #70b9da 23.75%, #6fb8d9 25%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  .last {
    margin-top: 128px;
    font-size: 2.5rem;
    align-self: center;
  }
  .mobile .last {
    font-size: 1.2rem;
  }
  .last .strong {
    font-size: 4rem;
  }
  .mobile .last .strong {
    font-size: 1.5rem;
  }
  p {
    margin: 32px 0;
  }
</style>

<svelte:window bind:innerWidth="{width}" />

<HeaderLabel label="Story" />

<div class="container {width < 560 ? 'mobile' : ''}">
  <div class="fadeInRight">「わたしはハーゲンダッツ！」</div>
  <div class="fadeInRight">「兄さん同じものがいいです。」</div>
  <div class="fadeInRight">もう夜だからと妹たちを置いてコンビニにアイスを買いに向かっていた主人公りょは。</div>
  <div class="fadeInRight">そこに空から<span class="piropiro strong">謎の異音</span>が聞こえてくる。</div>
  <p></p>
  <div class="fadeInRight"><span class="piropiro strong">ピロピロピロピロピロピロ...</span></div>
  <p></p>
  <div class="fadeInRight">空を見上げるとそこには<span class="silver strong">銀色</span>の空飛ぶ円盤が！！</div>
  <div class="fadeInRight">白衣を着た<span class="scarlet strong">紅色</span>の髪の美少女が、<span class="light strong">光</span>の中ふわりと降り立つ。</div>
  <p></p>
  <div class="fadeInRight">「やあやあ、君はこの<span class="earth strong">惑星</span>に住む現地人であっているかな？」</div>
  <div class="fadeInRight">「わたしは君たちが呼ぶ、えーっと、ケプラー452bからきた<span class="universe strong">宇宙人</span>だ。」</div>
  <div class="fadeInRight">「うっかり燃料を切らしてしまってね、補給させてくれないかい？」</div>
  <p></p>
  <div class="fadeInRight">「あぁ、燃料が何か言ってなかったね。」</div>
  <div class="fadeInRight">「この宇宙船の燃料は<span class="scarlet strong">愛</span>だよ。」</div>
  <div class="fadeIn last">「君、私と<span class="scarlet strong">愛</span>で<span class="comunication strong">交信</span>しよう。」</div>
</div>
