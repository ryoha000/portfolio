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
    cursor: pointer;
  }
  img {
    height: 100%;
  }
</style>

<div class="container">
  {#each imgURLs as src, i}
    <div class="thumb" on:click="{() => select(i)}">
      <img {src} alt="{`${i}`}" style="{imgIndex === i ? 'border: 2px red solid;' : ''}" />
    </div>
  {/each}
</div>
