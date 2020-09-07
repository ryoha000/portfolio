<script lang="ts">
  import type { CharactorData } from './charactorData'

  export let data: CharactorData
</script>

<style>
  img {
    width: 100%;
    background-position: 100%;
		background-size: 400%;
		transition: background 400ms ease-in-out;
  }
  img:hover {
		background-position: 0;
	}
</style>

<img
  style="background-image: linear-gradient(45deg, rgba({data.selif.color.join(',')}) 49%, rgba({data.subColor.join(',')}) 49% 51%, rgba({data.selif.color.join(',')}) 51%); background-color: rgba({data.selif.color.join(',')});"
  src="{data.src}"
  alt="{data.name.map(v => v.text).join('')}"
  loading="lazy"
/>
