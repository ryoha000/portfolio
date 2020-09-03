<script lang="ts">
import { onMount } from 'svelte';

  import type { CharactorData } from './charactorData'
  import CharactorInformation from './CharactorInformation.svelte'

  export let data: CharactorData
  let imgHeight: number
  let img: HTMLImageElement

  const setHeight = () => {
    imgHeight = img.height - 1
  }
  onMount(() => {
    setTimeout(() => {
      setHeight()
    }, 100);
  }) 
</script>

<style>
  .container {
    display: flex;
    position: relative;
    padding: 24px;
  }
  .leftTop {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    border-top: red solid 4px;
    border-left: red solid 4px;
    z-index: 2;
  }
  .rightBottom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 64px;
    height: 64px;
    border-bottom: red solid 4px;
    border-right: red solid 4px;
    z-index: 2;
  }
  .charaImg {
    margin: auto;
  }
  img {
    width: 100%;
    
  }
</style>

<svelte:window on:resize="{setHeight}" />

<div class="container fadeInUp">
  <div class="leftTop"></div>
  <div class="rightBottom"></div>
  <div class="charaImg">
    <div style="background-color: rgba({data.selif.color.join(',')}); height: {imgHeight}px">
      <img src="{data.src}" alt="{data.name.map(v => v.text).join('')}" bind:this="{img}" loading="eager" />
    </div>
  </div>
  <CharactorInformation data="{data}" />
</div>
