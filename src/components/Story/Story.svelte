<script lang="ts">
  import HeaderLabel from '../UI/HeaderLabel.svelte'
</script>

<style>
  .container {
    transform: rotate(0.03deg);
    font-size: 1.5rem;
    max-width: 1000px;
    padding: 0 3rem;
  }
  .strong {
    font-size: 2rem;
  }
  .thirtyOne {
    background-image: linear-gradient(-45deg, green 20%, red 20% 30%, green 30% 60%, red 60% 70%, green 70%);
    color: transparent;
    -webkit-background-clip: text;
  }
  .sister {
    background-image: linear-gradient(-10deg, rgb(84, 84, 84) 50%, rgb(224, 224, 224) 50%);
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-stroke: 1px rgb(84, 84, 84);
  }
  .piropiro {
    background: linear-gradient(45deg, blue, green);
    color: transparent;
    -webkit-background-clip: text;
  }
  .red {
    color: red;
  }
  .pink {
    color: pink;
    -webkit-text-stroke: 1px #ff3939;
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
    -webkit-background-clip: text;
  }
  .light {
    background: linear-gradient(45deg, rgb(255, 208, 0), rgb(243, 228, 163) 50%, rgb(255, 208, 0));
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-stroke: 1px #ffbf34;
  }
  .scarlet {
    color: rgb(191, 87, 130);
  }
  .comunication {
    background-image: repeating-radial-gradient(circle at center, #6fb8d9, #70b9da 1.25%, #73bcdd 2.5%, #78c0e1 3.75%, #7fc6e6 5%, #86cdec 6.25%, #8cd3f2 7.5%, #93d9f7 8.75%, #98ddfb 10%, #9be0fe 11.25%, #9ce1ff 12.5%, #9be0fe 13.75%, #98ddfb 15%, #93d9f7 16.25%, #8cd3f2 17.5%, #86cdec 18.75%, #7fc6e6 20%, #78c0e1 21.25%, #73bcdd 22.5%, #70b9da 23.75%, #6fb8d9 25%);
    color: transparent;
    -webkit-background-clip: text;
  }
  p {
    margin: 32px 0;
  }
</style>

<HeaderLabel label="Story" />

<div class="container">
  <div class="fadeInRight">「わたしは<span class="thirtyOne strong">サーティーワン！</span>」</div>
  <div class="fadeInRight">「兄さんと<span class="pink strong">同じ</span>ものがいいです。」</div>
  <div class="fadeInRight">もう夜だからと<span class="sister strong">妹たち</span>を置いてコンビニにアイスを買いに向かっていた主人公りょは。</div>
  <div class="fadeInRight">そこに空から<span class="piropiro">謎の異音</span>が聞こえてくる。</div>
  <p></p>
  <span class="fadeInRight piropiro">ピロピロピロピロピロピロ...</span>
  <p></p>
  <div class="fadeInRight">空を見上げるとそこには<span class="silver strong">銀色</span>の空飛ぶ円盤が！！</div>
  <div class="fadeInRight">白衣を着た<span class="scarlet strong">紅色</span>の髪の美少女が、<span class="light strong">光</span>の中ふわりと降り立つ。</div>
  <p></p>
  <div class="fadeInRight">「やあやあ、君はこの<span class="earth strong">惑星</span>に住む現地人であっているかな？」</div>
  <div class="fadeInRight">「わたしは君たちが呼ぶ、えーっと、ケプラー452bからきた<span class="universe strong">宇宙人</span>だ。」</div>
  <div class="fadeInRight">「うっかり燃料を切らしてしまってね、補給させてくれないかい？」</div>
  <p></p>
  <div class="fadeInRight">「あぁ、<span class="red strong">燃料</span>が何か言ってなかったね。」</div>
  <div class="fadeInRight">「この宇宙船の燃料は<span class="scarlet strong">愛</span>だよ。」</div>
  <div class="fadeInRight">「君、私と<span class="scarlet strong">愛</span>で<span class="comunication strong">交信</span>しよう。」</div>
</div>
