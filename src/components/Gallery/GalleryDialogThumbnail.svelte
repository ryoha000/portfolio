<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let selected: boolean = false
  export let src: string
  export let alt: string

  const dispatch = createEventDispatcher();
  const select = () => {
    dispatch('select')
  }
</script>

<style>
  .container {
    height: 100%;
    cursor: pointer;
  }
  img {
    height: 100%;
  }
</style>

<div class="container" on:click="{select}">
  <img {src} {alt} style="{selected ? 'border: 2px red solid;' : ''}" />
</div>
