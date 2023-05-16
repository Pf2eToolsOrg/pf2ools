<script>
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const ancestries = data.ancestries;

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let selected;

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

	const grid =
		'grid-cols-[minmax(2rem,_12rem)_2rem_minmax(6rem,_20rem)_minmax(4rem,_5rem)_3rem_4rem] gap-2';
</script>

<div class="container lg:flex">
	<div class="view-col lg:w-3/5 lg:h-full h-[30vh]">
		Here once stood a FilterBox.
		<p />
		It was janky and needed rewriting.
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
