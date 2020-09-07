<script lang="ts">
  import CharactorVoice from './CharactorVoice.svelte'
  import type { CharactorData } from './charactorData'
  import { fly } from 'svelte/transition';

  export let data: CharactorData
</script>

<style>
  .container {
		transform: rotate(0.03deg);
    padding-left: 16px;
    font-size: 1.3rem;
    user-select: none;
  }
  .selifFirst {
    margin-right: -4px;
    font-size: 2rem;
  }
  .selif {
    margin: 8px 0;
    font-size: 1.3rem;
  }
  .name {
    font-size: 2rem;
    margin-left: 24px;
  }
  .coloredName {
    color: red;
    margin-right: -8px;
  }
  .voiceTitleContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .voiceTitleContainer :first-child {
    margin-right: 3rem;
  }
  .voiceContainer {
    display: flex;
    align-items: center;
    height: 64px;
  }
  .detail {
    margin-top: 8px;
  }
  h2 {
    margin: 8px 0;
  }
  p {
    margin: 4px 0;
  }
</style>

<div class="container fadeInRight">
  <h2 class="selif">
    <span class="selifFirst" style="color: rgba({data.selif.color.join(',')});">
      {data.selif.text.slice(0, 1)}
    </span>
    {data.selif.text.slice(1)}
  </h2>
  <h2 class="name">
    {#each data.name as { text, colored }}
      {#if colored}
        <span class="coloredName">
          {text}
        </span>
      {:else}
        {text}
      {/if}
    {/each}
  </h2>
  <div class="voiceTitleContainer">
    <div>Voice</div><div>cv: {data.cv}</div>
  </div>
  <div class="voiceContainer">
    {#each data.voices as voice}
      <CharactorVoice {voice} />
    {/each}
  </div>
  <div class="detail">
    {#each data.detail as row}
      <p>{row}</p>
    {/each}
  </div>
</div>
