<script lang="ts">
  import Icon from '../UI/Icon.svelte'
  import { createEventDispatcher } from 'svelte';

  export let src: string
  export let alt: string

  const dispatch = createEventDispatcher();
  const move = (delta: number) => {
    dispatch('move', {
      delta: delta
    })
  }
</script>

<style>
  .container {
    height: 100%;
    width: 100%;
    max-height: 500px;
    background-color: black;
    display: flex;
    position: relative;
    justify-content: center;
    user-select: none;
  }
  .img {
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
  .toLeft {
    transform: translateX(-100vw);
  }
  .toRight {
    transform: translateX(100vw);
  }
</style>

<div class="container">
  <img {src} {alt} loading="eager" class="img" />
  <div class="icon left" on:click="{() => move(-1)}">
    <Icon name="chevron-left" size="{32}" />
  </div>
  <div class="icon right" on:click="{() => move(1)}">
    <Icon name="chevron-right" size="{32}" />
  </div>
</div>
