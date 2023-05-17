<script>
	import FilterOption from './FilterOption.svelte';
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const ancestries = data.ancestries;

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let selected = ancestries.entries().next().value[1];

	onMount(() => {
		// Select from Hash
		let hash = $page.url.hash.replaceAll(/\#|\?.+/g, '');
		// TODO: Expand to heritages

		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!hash.includes('_')) {
			hash = hash + '_crb';
		}

		if (hash && ancestries.has(hash)) {
			selected = ancestries.get(hash);
		} else {
			window.location = '#' + ancestries.entries().next().value[1].hash;
		}
	});

	const classes = {
		btn: 'basis-8',
		name: 'basis-32',
		hp: 'basis-8',
		boosts: 'basis-64',
		flaws: 'basis-24',
		size: 'basis-36',
		source: 'basis-16'
	};
</script>

<div class="container lg:flex">
	<div class="view-col h-[30vh] lg:w-3/5 lg:h-full">
		<FilterBox {selected} data={ancestries}>
			<svelte:fragment slot="header">
				<div class="pl-0.5 flex">
					<div class={classes['btn']} id="btn" />
					<div class={classes['name']} id="name">Name</div>
					<div class={classes['hp']} id="hp">HP</div>
					<div class={classes['boosts']} id="boosts">Boosts</div>
					<div class={classes['flaws']} id="flaws">Flaws</div>
					<div class={classes['size']} id="size">Size</div>
					<div class={classes['source']} id="source">Source</div>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="list" let:item>
				<FilterOption {item} {classes} {selected} />
			</svelte:fragment>
		</FilterBox>
	</div>
	<div class="view-col max-h-[90vh] lg:w-2/5">
		<DisplayBox {selected} />
	</div>
</div>

<svelte:window
	on:hashchange={(e) => {
		let hash = e.newURL.remove(/\?.+/g).split('#')[1];
		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!(hash.includes('_') && ancestries.has(hash))) {
			hash = hash + '_crb';
		}
		if (hash && ancestries.has(hash)) {
			selected = ancestries.get(hash);
		} else {
			window.location = '#' + ancestries.entries().next().value[1].hash;
		}
	}}
/>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>
