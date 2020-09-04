<script lang="ts">
  import Caption from './Caption.svelte'
  import { scrollto } from "svelte-scrollto";
  
  const anchors = [
    'Top',
    'Story',
    'Charactors',
    'Gallery',
    'News',
    'Spec'
  ]
  const getId = (label: string) => {
    return label.toLowerCase()
  }
</script>

<style>
  .container {
    position: fixed;
    z-index: 10;
    width: 100%;
    display: flex;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .logo {
    margin-right: auto;
    width: 20rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
</style>

<header class="header">
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="container">
    <a class="logo" use:scrollto={`#top`}>
      <img src="/assets/logo.png" alt="logo" />
    </a>
    {#each anchors as anchor}
      <a use:scrollto={`#${getId(anchor)}`}>
        <Caption label="{anchor}" />
      </a>
    {/each}
  </div>
</header>
