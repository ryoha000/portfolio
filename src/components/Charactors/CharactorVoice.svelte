<script context="module" lang="ts">
	const audios = new Set<HTMLAudioElement>();
</script>

<script lang="ts">
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';
  import { speak } from '../../store/index';

  export let voice: {
    text: string
    src: string
  }
  export let isMobile: boolean = false
  let size = spring(32);
  let audio: HTMLAudioElement
  let isPaused = true

  const togglePlay = () => {
    if (isPaused) {
      // play()
      if (!isMobile) {
        speak.set({ speaking: true, selif: voice.text })
      }
    } else {
      // pause()
      speak.set({ speaking: false, selif: "" })
    }
  }
  const mouseOver = () => {
    if (!isMobile) {
      size.set(40)
    }
  }
  const mouseLeave = () => {
    if (!isMobile) {
      size.set(32)
    }
  }
  const play = () => {
    audio.play()
    audios.forEach(ele => {
			if (ele !== audio) ele.pause();
		});
  }
  const pause = () => {
    audio.pause()
  }
  // onMount(() => {
  //   audios.add(audio)
  //   return () => audios.delete(audio);
  // })
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
<!-- <audio src="{voice.src}" bind:this="{audio}" bind:paused="{isPaused}" /> -->

<div class="container">
  <div
    class="icon"
    on:mousedown="{togglePlay}"
    on:mouseover="{mouseOver}"
    on:mouseout="{mouseLeave}"
    style="{`width: ${$size + 24}px; height: ${$size + 24}px; border-radius: ${($size + 24) / 2}px;`}"
  >
    {#if $speak.selif !== voice.text}
      <img src="/assets/love-letter-closed.svg" alt="play" loading="lazy" />
    {:else}
      <img src="/assets/love-letter.svg" alt="pause" loading="lazy" />
    {/if}
  </div>
</div>
