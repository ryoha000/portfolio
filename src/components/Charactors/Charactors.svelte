<script lang="ts">
  import WhiteSpace from '../UI/WhiteSpace.svelte'
  import HeaderLabel from '../UI/HeaderLabel.svelte'
  import CharactorFace from './CharactorFace.svelte'
  import Charactor from './Charactor.svelte'
  import MobileCharacter from './MobileCharacter.svelte'
  import { charactorDatas } from './charactorData'

  let width: number
</script>

<style>
  .facesContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    margin-bottom: 96px;
    justify-content: center;
  }
  .charaContainer {
    max-width: 1000px;
  }
  .mobileCharaContainer {
    width: 100vw;
  }
</style>

<svelte:window bind:innerWidth="{width}" />

<HeaderLabel label="Characters" />

<div class="facesContainer">
  {#each charactorDatas as data, i }
    <CharactorFace faceSrc={data.faceSrc} index={i} />
  {/each}
</div>

{#if width > 744}
  {#each charactorDatas as data, i }
    <div id="charactor{i}">
      <WhiteSpace />
    </div>
    <div class="charaContainer">
      <Charactor {data} />
    </div>
  {/each}
{:else}
  {#each charactorDatas as data, i }
    <div id="charactor{i}">
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
    </div>
    <div class="mobileCharaContainer">
      <MobileCharacter {data} />
    </div>
  {/each}
{/if}
