<script lang="ts">
  import { spring } from 'svelte/motion';
  import { scrollto } from "svelte-scrollto";

  export let faceSrc: string
  export let index: number

  let size = spring(104);
  const mouseOver = () => {
    size.set(128)
  }
  const mouseLeave = () => {
    size.set(104)
  }
  $: imgStyle = `width: ${$size}px; height: ${$size}px;`
  $: faceStyle = `border-radius: ${$size / 2}px;`
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<style>
  .container {
    width: 128px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img {
    cursor: pointer;
  }
  .face {
    border: solid #bf1f1f 4px;
    width: 100%;
    height: 100%;
  }
</style>

<div class="container">
  <a class="img" style="{imgStyle}" use:scrollto={`#charactor${index}`}>
    <img
      src="{faceSrc}"
      style="{faceStyle}"
      alt="face"
      class="face"
      on:mouseover="{mouseOver}"
      on:mouseout="{mouseLeave}"
    />
  </a>
</div>
