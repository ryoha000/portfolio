<script lang="ts">
  import type { CharactorData } from './charactorData'
  export let data: CharactorData
</script>

<style>
  .selifFirst {
    font-size: 2.5rem;
  }
  .selif {
    font-size: 1.5rem;
  }
  .voiceContainer {
    display: flex;
  }
</style>

<div>
  <div class="selif">
    <span class="selifFirst">{data.selif.slice(0, 1)}</span>{data.selif.slice(1)}
  </div>
  <div>
    {data.name}
  </div>
  <div class="voiceContainer">
    <div>
      voice1
    </div>
    <div>
      voice2
    </div>
    <div>
      voice3
    </div>
  </div>
  <div>
    {data.detail}
  </div>
</div>
