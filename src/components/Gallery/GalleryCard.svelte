<script lang="ts">
  import HeaderLabel from '../UI/HeaderLabel.svelte'
  import type { Work } from './Works'

  export let work: Work
  export let index: number

  let isHover: boolean = false
  let titleHeight: number
  const hover = () => {
    isHover = true
  }
  const leave = () => {
    isHover = false
  }
</script>

<style>
  .container {
    cursor: zoom-in;
    position: relative;
    border-radius: 16px;
  }
  .imgContainer {
    width: 300px;
    height: 180px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    border: 2px solid black;
  }
  .titleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(0.03deg);
    width: 100%;
    min-height: 80px;
    border-radius: 0 0 16px 16px;
    padding: 0 2rem;
    transition: bottom 0.5s;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  .wrapper {
    border-radius: 16px;
    position: absolute;
    width: 300px;
    height: 180px;
    overflow: hidden;
    top: 0;
  }
  .layer {
    width: 100%;
    height: 100%;
    transition: height 0.5s;
  }
  .title {
    font-size: 1.25rem;
  }
  .subtitle {
    font-size: 1rem;
  }
</style>

<div class="{`container fadeInDelay${index * 200}`}" on:mouseover="{hover}" on:mouseout="{leave}">
  <div class="imgContainer">
    <img src="{work.imgURLs[0]}" alt="{work.title}" />
  </div>
  <div class="wrapper">
    <div class="layer" style="{isHover ? `height: calc(100% - ${titleHeight}px)` : ''}"></div>
    <div class="titleContainer" bind:clientHeight="{titleHeight}">
      <div class="title">{work.title}</div>
      <div class="subtitle">{work.subtitle}</div>
    </div>
  </div>
</div>
