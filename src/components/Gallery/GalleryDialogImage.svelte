<script lang="ts">
  import Icon from '../UI/Icon.svelte'
  import { createEventDispatcher } from 'svelte';

  export let srcs: string[]
  export let imgIndex: number
  let clientWidth: number
  let clientHeight: number
  $: containerHeightStyle = `
    height: ${clientWidth / 2}px;
  `
  $: imgContainerStyle = `
    height: ${clientHeight}px;
  `
  $: imgWrapperStyle = `
    width: ${clientWidth}px;
    height: ${clientHeight}px;
  `
  $: positionStyle = `
    transform: translateX(-${clientWidth * imgIndex}px);
  `

  const dispatch = createEventDispatcher();
  const move = (delta: number) => {
    dispatch('move', {
      delta: delta
    })
  }
</script>

<style>
  .container {
    max-height: 500px;
    width: 100%;
    background-color: black;
    position: relative;
    user-select: none;
  }
  .imgContainer {
    display: flex;
    overflow: hidden;
  }
  .imgWrapper {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 1s;
  }
  img {
    max-width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: contain;
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
</style>

<div class="container" style="{containerHeightStyle}" bind:clientHeight bind:clientWidth>
  <div class="imgContainer" style="{imgContainerStyle}">
    {#each srcs as src, i}
      <div class="imgWrapper" style="{imgWrapperStyle + positionStyle}">
        <img {src} alt="{`${i}`}" loading="eager" />
      </div>
    {/each}
  </div>
  <div class="icon left" on:click="{() => move(-1)}">
    <Icon name="chevron-left" size="{32}" />
  </div>
  <div class="icon right" on:click="{() => move(1)}">
    <Icon name="chevron-right" size="{32}" />
  </div>
</div>
