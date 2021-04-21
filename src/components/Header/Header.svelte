<script lang="ts">
  import Caption from "./Caption.svelte";
  import { scrollto } from "svelte-scrollto";
  import MobileHeader from './MobileHeader.svelte'

  let width: number
  const anchors = ["Top", "Story", "Characters", "Gallery", "Spec"];
  const getId = (label: string) => {
    return label.toLowerCase()
  }
  const clickCaption = (label: string) => {
    console.log('click')
    const res = label.toLowerCase()
    history.replaceState('', '', `#${res}`)
  }
</script>

<style>
  .container {
    position: fixed;
    z-index: 100;
    width: 100vw;
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

<svelte:window bind:innerWidth="{width}" />

{#if width > 600}
  <header class="header">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="container">
      <a class="logo" use:scrollto={`#top`}>
        <img src="/assets/logo.webp" alt="logo" loading="eager" />
      </a>
      {#each anchors as anchor}
        <a use:scrollto={`#${getId(anchor)}`} on:click={() => clickCaption(anchor)}>
          <Caption label={anchor} />
        </a>
      {/each}
    </div>
  </header>
{:else}
  <MobileHeader />
{/if}
