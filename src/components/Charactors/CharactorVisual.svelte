<script lang="ts">
  import type { CharactorData } from './charactorData'
  import CharactorImage from './CharactorImage.svelte'
  import Hukidashi from './Hukidashi.svelte'
  import { speak } from '../../store/index'
  import { fade } from 'svelte/transition';

  export let data: CharactorData

  let text = ''
  let allText = ''
  let timer = 0
  let height: number = 0

  const unsubscribe = speak.subscribe(s => {
    if (!s.speaking) {
      clearInterval(timer)
      text = ''
      allText = ''
    }
		if (s.speaking && allText !== s.selif) {
      clearInterval(timer)
      text = ''
      allText = s.selif
      typing(s.selif)
    }
  });
  
  const typing = (selif: string) => {
    if (text.length === selif.length) {
      return
    }
    text = selif.slice(0, text.length + 1)
    timer = setTimeout(() => {
      typing(selif)
    }, 50)
  }
</script>

<style>
  .container {
    margin: auto;
    min-width: 30%;
    position: relative;
  }
  .selif {
    position: absolute;
    top: 35%;
    height: 30%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border: solid rgba(0, 0, 0, 0.3) 1px;
    word-break : break-all;
    padding: 8px;
    border-radius: 8px;
    transform: rotate(0.03deg);
  }
  .hukidashi {
    position: absolute;
    opacity: 0;
    transition: opacity 600ms;
  }
  .container:hover .hukidashi {
    opacity: 1;
  }
  .leftHukidashi {
    top: 35%;
    left: 0;
  }
  .rightHukidashi {
    top: 50%;
    right: 0;
  }
</style>

<div class="container">
  <CharactorImage {data} />
  {#if $speak.speaking && data.voices.some(v => v.text === $speak.selif)}
    <div class="selif" transition:fade>
      {text}
    </div>
  {:else if data.name[0].text !== 'り'}
    <div class="hukidashi leftHukidashi">
      <Hukidashi label="ユーザー" url="{data.account}" />
    </div>
    <div class="hukidashi rightHukidashi">
      <Hukidashi label="元ネタ" url="{data.url}" />
    </div>
  {/if}
</div>
