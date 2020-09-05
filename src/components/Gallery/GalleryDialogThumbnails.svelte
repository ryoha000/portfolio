<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let imgURLs: string[]
  export let imgIndex: number

  let clientHeight: number
  let clientWidth: number
  const dispatch = createEventDispatcher();
  const select = (index: number) => {
    dispatch('select', {
      index: index
    })
  }
</script>

<style>
  .container {
    display: flex;
    margin-bottom: 16px;
    background-color: black;
    max-height: 96px;
    height: 15vw;
    position: relative;
  }
  .thumb {
    height: 100%;
    width: 30vw;
    max-width: 192px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  img {
    height: 100%;
  }
  .selected {
    position: absolute;
    transition: transform 1s;
    height: 100%;
    width: 30vw;
    max-width: 192px;
    border: 2px red solid;
  }
</style>

<div class="container">
  {#each imgURLs as src, i}
    <div class="thumb" on:click="{() => select(i)}">
      <img {src} alt="{`${i}`}" />
    </div>
  {/each}
  <div class="selected" style="{`transform: translateX(min(${30 * imgIndex}vw, ${192 * imgIndex}px));`}"></div>
</div>
