<script>
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import { DataHandler } from '@vincjo/datatables';
	import Storage from 'Storage';
	import DisplayBox from '../../lib/Pages/DisplayBox.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const { ancestries, heritages } = new Storage();
	ancestries.load();
	let selected;

	$: $ancestries, handler.setRows($ancestries.toValueArray());
	const handler = new DataHandler($ancestries.toValueArray());

	onMount(() => {
		hashToSelect($page.url.hash.replaceAll('#', ''));
	});

	// "if (selected)" basically checks if the page is loaded, as per code above.
	// AI suggests to me this is a hack, but meh.
	$: if (selected) hashToSelect($page.url.hash.replaceAll('#', ''));

	function hashToSelect(hash) {
		let [ancestry, extra] = hash.split('?');
		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!ancestry.includes('_')) {
			ancestry = ancestry + '_crb';
		}

		if (!$ancestries.size) {
			// Give time to load the ancestries
			setTimeout(() => {
				hashToSelect(hash);
			}, 100);
		} else if (ancestry && $ancestries.has(ancestry)) {
			selected = $ancestries.get(ancestry);
		} else {
			selected = $ancestries.firstValue();
			return (window.location = '#' + selected.hash);
		}
	}
</script>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>

<div class="container flex h-[90vh]">
	<div class="view-col w-1/2">
		<FilterBox {handler} {selected} />
	</div>
	<div class="view-col w-1/2 p-4">
		<DisplayBox {selected} />
	</div>
</div>

<svelte:window
	on:hashchange={(e) => {
		let hash = e.newURL.split('#')[1];
		hashToSelect(hash);
	}}
/>
