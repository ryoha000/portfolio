<script lang="ts">
	import Caption from './Caption.svelte'
</script>

<style>
  .header {
    width: 100%;
  }
  .container {
    position: fixed;
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
  <div class="container">
    <div class="logo">
      <img src="/logo.png" alt="logo" />
    </div>
    <Caption label="Top" />
    <Caption label="Charactors" />
    <Caption label="Story" />
    <Caption label="Gallery" />
    <Caption label="News" />
    <Caption label="Spec" />
  </div>
</header>
