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
  .leftTop {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    border-top: red solid 4px;
    border-left: red solid 4px;
    z-index: 2;
  }
  .rightBottom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 64px;
    height: 64px;
    border-bottom: red solid 4px;
    border-right: red solid 4px;
    z-index: 2;
  }
  .charaImg {
    margin: auto;
  }
  img {
    width: 100%;
    background-position: 1px;
    transform: rotate(0deg) !important;
  }
</style>

<div class="container fadeIn">
  <div class="leftTop"></div>
  <div class="rightBottom"></div>
  <div class="charaImg">
    <div>
      <img
        style="background-color: rgba({data.selif.color.join(',')});"
        src="{data.src}"
        alt="{data.name.map(v => v.text).join('')}"
        loading="eager"
      />
    </div>
  </div>
  <CharactorInformation data="{data}" />
</div>
