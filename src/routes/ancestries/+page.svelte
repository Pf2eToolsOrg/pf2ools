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

<div class="container mx-auto p-8 space-y-8 pf2ools md:flex flex-row">
	<div class="view-col">
		<FilterBox />
		{#if data.ancestries}
			{#each data.ancestries as ancestry}
				<a href="#a">{ancestry.name}</a>
			{/each}
		{/if}
	</div>
	<div class="view-col font-sabonltstd">
		<Renderer />Content Content Content
	</div>
</div>
