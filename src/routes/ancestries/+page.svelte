<script>
	import FilterBox from '$lib/Filter/FilterBox.svelte';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		window.ancestries = data.ancestries;
	});
</script>

<svelte:head>
	<title>PF2ools - Ancestries</title>
</svelte:head>

<div class="container md:flex flex-row justify-center space-y-3">
	<div class="view-col w-3/5">
		<FilterBox data={data.ancestries} field="name" let:item={row}>
			<svelte:fragment slot="header">
				<div id="name">Name</div>
				<div id="hp">HP</div>
				<div id="size">Size</div>
				<div id="source">Source</div>
			</svelte:fragment>

			<svelte:fragment slot="list">
				<span class="name">{row.name}</span>
				<span class="hp">{row.hp}</span>
				<span class="size">{row.size.joinConjunct(', ', ' or ')}</span>
				<span class="source">{row.source}</span>
			</svelte:fragment>
		</FilterBox>
	</div>
	<div class="view-col w-2/5 font-sabonltstd pf2ools">
		<Renderer />Content Content Content
	</div>
</div>
