<script lang="ts">
  import WhiteSpace from './WhiteSpace.svelte'
  
  export let label: string
</script>

<style>
  .title {
    transform: rotate(0.03deg);
    font-size: 2.5rem;
    user-select: none;
  }
</style>

<div id="{label.toLowerCase()}">
  <WhiteSpace />
</div>

<h2 class="title fadeIn">{label}</h2>
