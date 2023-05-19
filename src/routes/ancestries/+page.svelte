<script>
	import FilterOption from './FilterOption.svelte';
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const ancestries = data.ancestries;

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Renderer from '../../lib/Renderer/Renderer.svelte';

	let selected = ancestries.entries().next().value[1];

	onMount(() => {
		// Select from Hash
		let hash = $page.url.hash.replaceAll('#', '');
		hashToSelect(hash);
	});

	function hashToSelect(hash) {
		let [ancestry, extra] = hash.split('?');
		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!ancestry.includes('_')) {
			ancestry = ancestry + '_crb';
		}

		if (ancestry && ancestries.has(ancestry)) {
			selected = ancestries.get(ancestry);
		} else {
			return (window.location = '#' + ancestries.entries().next().value[1].hash);
		}
	}

	const classes = {
		btn: '-mt-0.5 basis-8',
		name: 'text-left basis-32',
		hp: 'text-left basis-8',
		boosts: 'text-left basis-64',
		flaws: 'text-left basis-24',
		size: 'text-left basis-36',
		source: 'text-left basis-16'
	};

	// TODO: Refactor this to use https://vincjo.fr/datatables/home instead.
</script>

<div class="container lg:flex">
	<div class="view-col h-[30vh] lg:w-3/5 lg:h-full">
		<FilterBox {selected} data={ancestries}>
			<svelte:fragment slot="header">
				<div class="flex text-sm -ml-0.5">
					<button class={classes['btn']} id="btn" />
					<button class={classes['name']} id="name">Name</button>
					<button class={classes['hp']} id="hp">HP</button>
					<button class={classes['boosts']} id="boosts">Boosts</button>
					<button class={classes['flaws']} id="flaws">Flaws</button>
					<button class={classes['size']} id="size">Size</button>
					<button class={classes['source']} id="source">Source</button>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="list" let:item>
				<FilterOption {item} {classes} {selected} />
			</svelte:fragment>
		</FilterBox>
	</div>
	<div class="flex flex-col max-h-[90vh] lg:w-2/5 pf2ools">
		<div class="view-col h-2/3">
			<DisplayBox {selected} />
		</div>
		<div class="view-col h-1/3 wrp-stats stats">
			<div class="m-1.5">
				<Renderer entries={selected} />
			</div>
		</div>
	</div>
</div>

<svelte:window
	on:hashchange={(e) => {
		let hash = e.newURL.split('#')[1];
		hashToSelect(hash);
	}}
/>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>
