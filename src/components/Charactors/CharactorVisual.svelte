<script lang="ts">
  import type { CharactorData } from './charactorData'
  import CharactorImage from './CharactorImage.svelte'

  export let data: CharactorData
</script>

<style>
  .container {
    margin: auto;
    min-width: 30%;
  }
</style>

<div class="container">
  <CharactorImage {data} />
</div>
