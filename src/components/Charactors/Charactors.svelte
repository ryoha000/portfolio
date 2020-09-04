<script lang="ts">
  import WhiteSpace from '../UI/WhiteSpace.svelte'
  import CharactorFace from './CharactorFace.svelte'
  import Charactor from './Charactor.svelte'
  import { charactorDatas } from './charactorData'
</script>

<style>
  .title {
    transform: rotate(0.03deg);
    font-size: 2.5rem;
    user-select: none;
  }
  .facesContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    margin-bottom: 96px;
    justify-content: center;
  }
  .charaContainer {
    margin-bottom: 96px;
    max-width: 1000px;
  }
</style>

<div id="charactors">
  <WhiteSpace />
</div>

<h2 class="title">Charactor</h2>

<div class="facesContainer">
  {#each charactorDatas as data }
    <CharactorFace faceSrc={data.faceSrc} />
  {/each}
</div>

{#each charactorDatas as data }
  <div class="charaContainer">
    <Charactor {data} />
  </div>
{/each}
