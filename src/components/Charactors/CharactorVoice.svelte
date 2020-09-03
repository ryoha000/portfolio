<script lang="ts">
  import Icon from '../UI/Icon.svelte'
  import { spring } from 'svelte/motion';

  export let src: string
  let size = spring(32);
  let audio: HTMLAudioElement
  let isPlay = false
  let timer: number

  const togglePlay = () => {
    if (isPlay) {
      pause()
    } else {
      play()
    }
  }
  const mouseOver = () => {
    size.set(40)
    timer = setTimeout(() => {
      size.set(36)
      setTimeout(() => {
        size.set(40)
      }, 100);
    }, 100);
  }
  const mouseLeave = () => {
    clearInterval(timer)
    size.set(32)
  }
  const play = () => {
    audio.play()
    isPlay = true
  }
  const pause = () => {
    audio.pause()
    isPlay = false
  }
  const style = () => {
    return `width: ${$size + 24}px; height: ${$size + 22}px;`
  }
</script>

<style>
  .icon {
    background-color: rgb(51,51,51);
    color: red;
    padding: 12px;
    /* border-radius: 28px; */
    width: 56px;
    height: 54px;
    cursor: pointer;
    margin-right: 16px;
  }
</style>

<!-- svelte-ignore a11y-media-has-caption -->
<audio src="{src}" bind:this="{audio}" />

<div
  class="icon"
  on:mousedown="{togglePlay}"
  on:mouseover="{mouseOver}"
  on:mouseout="{mouseLeave}"
  style="{`width: ${$size + 24}px; height: ${$size + 22}px; border-radius: ${($size + 24) / 2}px;`}"
>
  {#if isPlay}
    <Icon name="paused" size="{$size}" />
  {:else}
    <!-- <Icon name="headphones" size="{$size}" /> -->
    <img src="/assets/love-letter.svg" alt="play" />
  {/if}
</div>
