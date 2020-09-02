<script lang="ts">
  import Charactor from './Charactor.svelte'
  import { charactorDatas } from './charactorData'
</script>

<style>
</style>
{#each charactorDatas as data }
  <Charactor data={data} />
{/each}
