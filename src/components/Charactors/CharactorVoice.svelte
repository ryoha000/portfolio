<script lang="ts">
  import Icon from '../UI/Icon.svelte'
  import { spring } from 'svelte/motion';

  export let src: string
  let size = spring(32);
  let audio: HTMLAudioElement
  let isPaused = true

  const togglePlay = () => {
    if (isPaused) {
      play()
    } else {
      pause()
    }
  }
  const mouseOver = () => {
    size.set(40)
  }
  const mouseLeave = () => {
    size.set(32)
  }
  const play = () => {
    audio.play()
  }
  const pause = () => {
    audio.pause()
  }
  const style = () => {
    return `width: ${$size + 24}px; height: ${$size + 22}px;`
  }
</script>

<style>
  .container {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    background-color: rgb(51,51,51);
    color: red;
    padding: 12px;
    width: 56px;
    height: 56px;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>

<!-- svelte-ignore a11y-media-has-caption -->
<audio src="{src}" bind:this="{audio}" bind:paused="{isPaused}" />

<div class="container">
  <div
    class="icon"
    on:mousedown="{togglePlay}"
    on:mouseover="{mouseOver}"
    on:mouseout="{mouseLeave}"
    style="{`width: ${$size + 24}px; height: ${$size + 24}px; border-radius: ${($size + 24) / 2}px;`}"
  >
    {#if isPaused}
      <img src="/assets/love-letter-closed.svg" alt="play" loading="lazy" />
    {:else}
      <img src="/assets/love-letter.svg" alt="pause" loading="lazy" />
    {/if}
  </div>
</div>
