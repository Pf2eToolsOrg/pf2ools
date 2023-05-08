<script>
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const ancestries = data.ancestries;

	import { page } from '$app/stores';

	let selected;

	page.subscribe((value) => {
		let hash = value.url.hash.replace('#', '');

		if (hash && ancestries.has(hash)) {
			selected = ancestries.get(hash);
		} else {
			selected = ancestries.entries().next().value[1];
		}
	});
</script>

<svelte:head>
	<title>PF2ools - Ancestries</title>
</svelte:head>

<div class="container md:flex">
	<div class="view-col md:w-3/5">
		<FilterBox data={data.ancestries} field="name" let:item={row} {selected}>
			<svelte:fragment slot="header">
				<div class="grid grid-cols-4 gap-1">
					<div id="name">Name</div>
					<div id="hp">HP</div>
					<div id="size">Size</div>
					<div id="source">Source</div>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="list">
				<div class="grid grid-cols-4 gap-1">
					<span id="name">{row.name}</span>
					<span id="hp">{row.hp}</span>
					<span id="size"
						>{row.size.map((x) => x.toTitleCase()).joinConjunct(', ', ' or ')}</span
					>
					<span id="source">{row.source}</span>
				</div>
			</svelte:fragment>
		</FilterBox>
	</div>
	<div class="view-col max-h-[90vh] md:w-2/5 font-sabonltstd pf2ools">
		<DisplayBox {selected} />
	</div>
</div>
