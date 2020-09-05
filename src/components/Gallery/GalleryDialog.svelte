<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import HeaderLabel from '../UI/HeaderLabel.svelte'
  import GalleryDialogImage from './GalleryDialogImage.svelte'
  import GalleryDialogThumbnail from './GalleryDialogThumbnail.svelte'
  import Icon from '../UI/Icon.svelte'
  import type { Work } from './Works'

  export let work: Work

  onMount(() => {
    document.body.style.overflowY = 'hidden';
  })
  onDestroy(() => {
    document.body.style.overflowY = 'auto';
  })

  const stopClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const dispatch = createEventDispatcher();
  const close = (e: MouseEvent) => {
    stopClick(e)
    dispatch('close')
  }

  let imgIndex = 0
  const imageMove = (e: CustomEvent<{delta: number}>) => {
    const added = imgIndex + e.detail.delta
    const len = work.imgURLs.length
    if (added === len) {
      imgIndex = 0
    } else if (added === -1) {
      imgIndex = len - 1
    } else {
      imgIndex = added
    }
  }
</script>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    z-index: 200;
  }
  .dialogContainer {
    margin: auto;
    max-width: 1000px;
    max-height: 90vh;
    background-color: white;
    border-radius: 24px;
    padding: 24px 0;
    overflow: auto;
  }
  .thumbContainer {
    display: flex;
    margin-bottom: 16px;
    background-color: black;
    height: 96px;
  }
  .text {
    margin: 0 24px;
    transform: rotate(0.03deg);
  }
  .lnkContainer {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
  }
  .lnk {
    margin-right: 1rem;
    display: flex;
  }
</style>

<div class="container fadeIn" on:click="{close}">
  <div class="dialogContainer" on:click="{stopClick}">
    <h2 class="text">{work.title}</h2>
    <h3 class="text">{work.subtitle}</h3>
    <GalleryDialogImage srcs="{work.imgURLs}" {imgIndex} on:move="{imageMove}" />
    <div class="thumbContainer">
      {#each work.imgURLs as src, i}
        <GalleryDialogThumbnail
          {src}
          alt="{`${work.title}${i}`}"
          selected="{imgIndex === i}"
          on:select="{() => { imgIndex = i }}"
        />
      {/each}
    </div>
    {#each work.description as row}
      <div class="text">{row}</div>
    {/each}
    <div class="lnkContainer text">
      {#each work.refLinks as {title, url}}
        <a href="{url}" class="lnk" target="_blank" rel="noopener noreferrer">
          <div>{title}</div>
          <Icon name="open-in-new"></Icon>
        </a>
      {/each}
    </div>
  </div>
</div>
