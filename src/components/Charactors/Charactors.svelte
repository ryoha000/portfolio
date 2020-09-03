<script lang="ts">
  import Charactor from './Charactor.svelte'
  import { charactorDatas } from './charactorData'
</script>

<style>
  .charaContainer {
    margin-bottom: 64px;
  }
</style>

{#each charactorDatas as data }
  <div class="charaContainer">
    <Charactor data={data} />
  </div>
{/each}
