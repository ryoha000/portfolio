<script lang="ts">
  import { onMount } from 'svelte';
  import type { CharactorData } from './charactorData'
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
  .charaImg {
    margin: auto;
    min-width: 30%;
  }
  img {
    width: 100%;
    background-position: 1px;
    transform: rotate(0deg) !important;
  }
</style>

<div class="container fadeIn">
  <div class="leftTop edge"></div>
  <div class="rightBottom edge"></div>
  <div class="charaImg">
    <img
      style="background-color: rgba({data.selif.color.join(',')});"
      src="{data.src}"
      alt="{data.name.map(v => v.text).join('')}"
      loading="eager"
    />
  </div>
  <CharactorInformation data="{data}" />
</div>
