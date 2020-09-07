<script lang="ts">
  import type { CharactorData } from './charactorData'
  import CharactorImage from './CharactorImage.svelte'
  import Hukidashi from './Hukidashi.svelte'

  export let data: CharactorData
</script>

<style>
  .container {
    margin: auto;
    min-width: 30%;
    position: relative;
  }
  .hukidashi {
    position: absolute;
    opacity: 0;
    transition: opacity 600ms;
  }
  .container:hover .hukidashi {
    opacity: 1;
  }
  .leftHukidashi {
    top: 35%;
    left: 0;
  }
  .rightHukidashi {
    top: 50%;
    right: 0;
  }
</style>

<div class="container">
  <CharactorImage {data} />
  <div class="hukidashi leftHukidashi">
    <Hukidashi label="ユーザー" url="{data.account}" />
  </div>
  <div class="hukidashi rightHukidashi">
    <Hukidashi label="元ネタ" url="{data.url}" />
  </div>
</div>
