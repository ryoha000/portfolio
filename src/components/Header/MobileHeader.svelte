<script lang="ts">
  import Caption from "./Caption.svelte";
  import { scrollto, scrollTo } from "svelte-scrollto";

  let isOpen = false
  let height: number
  const toggleOpen = () => {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }
  const open = () => {
    isOpen = true
    document.body.style.overflowY = 'hidden';
  }
  const close = () => {
    isOpen = false
    document.body.style.overflowY = 'auto'
  }
  const jump = (id: string) => {
    scrollTo({element: `#${id}`})
    close()
  }
  const stopClick = (e: MouseEvent) => {
    e.stopPropagation()
  }
  const anchors = ["Top", "Story", "Characters", "Gallery", "Spec"];
  const getId = (label: string) => {
    return label.toLowerCase();
  };
</script>

<style>
  .container {
    position: fixed;
    z-index: 100;
  }
  .headerContainer {
    width: 100vw;
    display: flex;
    padding: 1rem 0.5rem;
    transition: background-color 1s;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .headerContainer.open {
    background-color: rgba(255, 255, 255, 1.0);
  }
  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  .menuIconContainer {
    position: relative;
    z-index: 150;
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  .bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 49px;
    height: 49px;
    transition: transform .3s ease,-webkit-transform .3s ease;
  }
  .barContent {
    position: absolute;
    left: 12px;
    background-color: black;
    height: 4px;
    width: 24px;
    transition: top .3s ease,bottom .3s ease,width .3s ease .15s,transform .3s ease .15s,-webkit-transform .3s ease .15s;
  }
  .bar1.openBar {
    transform: rotate(225deg);
    top: 24px;
  }
  .bar1 {
    top: 16px;
  }
  .bar2.openBar {
    width: 0;
  }
  .bar2 {
    top: 24px;
  }
  .bar3.openBar {
    transform: rotate(-225deg);
    top: 24px;
  }
  .bar3 {
    top: 32px;
  }
  .menuContainer {
    position: absolute;
    background-color: white;
    width: 100vw;
    height: 0;
    overflow: hidden;
    transition: height 1s;
    margin-top: -4px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menuContainer.open {
    height: 120vh;
  }
  .menuItem {
    padding: 0.5rem;
    font-size: 1.5rem;
    width: 80%;
  }
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="container" bind:clientHeight="{height}" on:click="{stopClick}">
  <div class="headerContainer {isOpen ? 'open' : ''}">
    <div class="menuIconContainer" on:click="{toggleOpen}">
      <div class="bar"><div class="barContent bar1 {isOpen ? 'openBar' : ''}"></div></div>
      <div class="bar"><div class="barContent bar2 {isOpen ? 'openBar' : ''}"></div></div>
      <div class="bar"><div class="barContent bar3 {isOpen ? 'openBar' : ''}"></div></div>
    </div>
    <a class="logo" use:scrollto={`#top`}>
      <img src="/assets/logo.webp" alt="logo" loading="eager" />
    </a>
  </div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="menuContainer {isOpen ? 'open' : ''}" style="top: {height}px;">
    {#each anchors as anchor}
      <a on:click="{() => jump(getId(anchor))}" class="menuItem">
        <Caption label={anchor} />
      </a>
    {/each}
  </div>
</div>
