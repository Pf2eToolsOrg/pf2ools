<script>
	import FilterBox from '$lib/Filter/FilterBox.svelte';
	import Renderer from '$lib/Renderer/Renderer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log(data);
</script>

<svelte:head>
	<title>PF2ools - Items</title>
</svelte:head>

<div class="container pf2ools md:flex flex-row justify-center space-y-3">
	<div class="border view-col">
		<FilterBox />
	</div>
	<div class="border view-col font-sabonltstd">
		<Renderer />Content Content Content
	</div>
</div>

<style>
	.border {
		border: 1px solid red;
	}
</style>
