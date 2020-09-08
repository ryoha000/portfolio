<script lang="ts">
  import { onMount } from 'svelte';
  import type { CharactorData } from './charactorData'
  import CharactorInformation from './CharactorInformation.svelte'

  export let data: CharactorData

  let container: HTMLDivElement
  let img: HTMLImageElement
  let prevWidth: number = 0
  let prevHeight: number = 0

  const update = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    if (width !== prevWidth || height !== prevHeight) {
      img.addEventListener('load', () => {
        if (img.naturalWidth && img.naturalHeight) {
          const imgRatio = img.naturalWidth / img.naturalHeight
          const containerRatio = container.clientWidth / container.clientHeight
          if (containerRatio > imgRatio) {
            console.log('a')
            img.style.width = `${container.clientHeight * imgRatio - 16 * imgRatio - 1}px`
            img.style.height = `${container.clientHeight - 16}px`
          } else {
            console.log('b')
            img.style.width = `${container.clientWidth - 16 * imgRatio}px`
            img.style.height = `${container.clientWidth / imgRatio - 16}px`
          }
        }
      })
      img.src = data.src
      prevWidth = width
      prevHeight = height
    }
  }
  onMount(() => {
    update()
  })
</script>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .edge {
    position: absolute;
    width: 64px;
    height: 64px;
    z-index: 2;
  }
  .leftTop {
    top: 0;
    left: 0;
    border-top: red solid 4px;
    border-left: red solid 4px;
  }
  .rightBottom {
    right: 0;
    bottom: 0;
    border-bottom: red solid 4px;
    border-right: red solid 4px;
  }
  .visualContainer {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .infoContainer {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 24px;
  }
  img {
    object-fit: cover;
    width: 100%;
  }
</style>

<svelte:window on:resize="{update}" />

<div class="container fadeIn" bind:this="{container}">
  <div class="leftTop edge"></div>
  <div class="rightBottom edge"></div>
  <div class="visualContainer">
    <img
      style="background-color: rgba({data.selif.color.join(',')});"
      alt="{data.name.map(v => v.text).join('')}"
      loading="lazy"
      bind:this="{img}"
    />
  </div>
  <div
    class="infoContainer"
    
    style="{data.account === 'https://github.com/ryoha000' ? 'background-color: rgba(255, 255, 255, 0.1);' : ''}"
  >
    <CharactorInformation data="{data}" isMobile="{true}" />
  </div>
</div>
