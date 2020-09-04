<script lang="ts">
  import HeaderLabel from '../UI/HeaderLabel.svelte'
  import GalleryCard from './GalleryCard.svelte'
  import { works } from './Works'
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    justify-content: center;
  }
  .card {
    margin-left: 16px;
    margin-bottom: 16px;
  }
</style>

<HeaderLabel label="Gallery" />

<div class="container">
  {#each works as work, index}
  <div class="card">
    <GalleryCard {work} {index} />
  </div>
  {/each}
</div>
