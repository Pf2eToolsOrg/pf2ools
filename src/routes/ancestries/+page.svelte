<script>
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const ancestries = data.ancestries;

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let selected;

	// Select from Hash
	page.subscribe((value) => {
		let hash = value.url.hash.replaceAll(/\#|\?.+/g, '');
		// TODO: Expand to heritages

		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!hash.includes('_')) {
			hash = hash + '_crb';
		}

		if (hash && ancestries.has(hash)) {
			selected = ancestries.get(hash);
		} else {
			selected = ancestries.entries().next().value[1];
		}
	});

	onMount(() => {
		window.ancestries = data.ancestries;
	});

	const grid = 'grid-cols-[minmax(5rem,_30rem)_2rem_minmax(5rem,_10rem)_4rem] gap-2';
</script>

<div class="container md:flex">
	<div class="view-col md:w-3/5">
		<FilterBox data={data.ancestries} field="name" let:item={row} {selected}>
			<svelte:fragment slot="header">
				<div class="pl-0.5 grid {grid}">
					<div id="name">Name</div>
					<div id="hp">HP</div>
					<div id="size">Size</div>
					<div id="source">Source</div>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="list">
				<div class="pl-0.5 grid {grid}">
					<span id="name">{row.name}</span>
					<span id="hp">{row.hp}</span>
					<span id="size">
						{row.size.map((x) => x.toTitleCase()).joinConjunct(', ', ' or ')}
					</span>
					<span id="source">{row.source}</span>
				</div>
			</svelte:fragment>
		</FilterBox>
	</div>
	<div class="view-col max-h-[90vh] md:w-2/5">
		<DisplayBox {selected} />
	</div>
</div>

<svelte:window
	on:hashchange={(e) => {
		let hash = e.newURL.remove(/\?.+/g).split('#')[1];
		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!hash.includes('_')) {
			hash = hash + '_crb';
		}
		selected = ancestries.has(hash)
			? ancestries.get(hash)
			: ancestries.entries().next().value[1];
	}}
/>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>
