<script lang="ts">
  import type { CharactorData } from './charactorData'
  import CharactorVisual from './CharactorVisual.svelte'
  import CharactorInformation from './CharactorInformation.svelte'

  export let data: CharactorData
</script>

<style>
  .container {
    display: flex;
    position: relative;
    padding: 24px;
  }
  .edge {
    position: absolute;
    width: 64px;
    height: 64px;
    z-index: 2;
  }
  .leftTop {
    top: 0;
    left: 0;
    border-top: red solid 4px;
    border-left: red solid 4px;
  }
  .rightBottom {
    right: 0;
    bottom: 0;
    border-bottom: red solid 4px;
    border-right: red solid 4px;
  }
</style>

<div class="container fadeIn">
  <div class="leftTop edge"></div>
  <div class="rightBottom edge"></div>
  <CharactorVisual {data} />
  <CharactorInformation data="{data}" />
</div>
