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

	// TODO: Refactor this to use https://vincjo.fr/datatables/home instead.
</script>

<div class="container lg:flex">aaaaaaaaaaaaaaaaa</div>

<svelte:window
	on:hashchange={(e) => {
		let hash = e.newURL.split('#')[1];
		hashToSelect(hash);
	}}
/>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>
