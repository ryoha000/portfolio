<script lang="ts">
  import Icon from '../UI/Icon.svelte'

  export let label: string
  export let url: string
</script>

<style>
  a {
    background-color: rgba(255, 255, 255, 0.5);
    border: black 2px solid;
    border-radius: 50%;
    padding: 1rem;
    transform: rotate(0.03deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<a href="{url}" target="_blank" rel="noopener noreferrer">
  {label}<Icon name="open-in-new" />
</a>
