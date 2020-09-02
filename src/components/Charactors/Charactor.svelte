<script lang="ts">
  import type { CharactorData } from './charactorData'
  import CharactorInformation from './CharactorInformation.svelte'
  export let data: CharactorData
</script>

<style>
  .container {
    display: flex;
    background-color: blue;
  }
</style>

<div class="container">
  <div>
    <img src="{data.src}" alt="sui_gray" />
  </div>
  <CharactorInformation data="{data}" />
</div>
