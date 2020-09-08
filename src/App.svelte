<script lang="ts">
	import HeaderComponent from './components/Header/Header.svelte'
	import Top from './components/Top/Top.svelte'
	import Story from './components/Story/Story.svelte'
	import Charactors from './components/Charactors/Charactors.svelte'
	import Gallery from './components/Gallery/Gallery.svelte'
	import Spec from './components/Spec/Spec.svelte'
	import FooterComponent from './components/Footer/Footer.svelte'

	import scrollAnimation from './lib/scrollAnimation'
	import { onMount } from 'svelte';

	onMount(() => {
		const { setup } = scrollAnimation()
		setup()
	})

</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<HeaderComponent />
<main>
	<div class="container">
		<Top />
		<Story />
		<Charactors />
		<Gallery />
		<Spec />
		<FooterComponent />
	</div>
</main>

<style>
	main {
		font-family: "M PLUS Rounded 1c",sans-serif;
		width: 100vw;
		height: 100%;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>