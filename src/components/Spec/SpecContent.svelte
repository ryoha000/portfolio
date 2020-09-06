<script lang="ts">
  export let label: string
  export let value: string
</script>

<style>
  .label {
    transform: rotate(0.03deg);
    margin-bottom: 8px;
  }
  .value {
    margin-top: 0;
    transform: rotate(0.03deg);
  }
</style>

<div class="container fadeInRight">
  <h3 class="label">{label}</h3>
  <h2 class="value">{value}</h2>
</div>
