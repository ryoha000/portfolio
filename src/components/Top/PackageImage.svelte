<script lang="ts">
  import { onMount } from 'svelte';
  import DrawImages from './drawImages'
  import type { Application } from '@pixi/app'

  let divContainer: HTMLDivElement
  let app: Application
  onMount(() => {
    app = DrawImages(divContainer)
  })
  const resize = () => {
    app.destroy()
    for (const child of divContainer.childNodes) {
      child.remove()
    }
    app = DrawImages(divContainer)
  }
</script>

<style>
  .container {
    width: 100%;
    max-width: 1000px;
  }
</style>

<svelte:window on:resize="{resize}"></svelte:window>
<div class="container" bind:this="{divContainer}"></div>
