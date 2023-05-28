<script>
	import FilterBox from '$lib/Pages/FilterBox.svelte';
	import { DataHandler, Th, ThFilter } from '@vincjo/datatables';
	import Storage from 'Storage';
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import { setContext } from 'svelte';

	const { ancestries, heritages } = new Storage();

	// Do not LOAD every time you barely TOUCH the page!
	if (!$ancestries.size) ancestries.load();
	if (!$heritages.size) heritages.load();

	let showVersatile = localStorageStore('showVersatile', false);
	let selected;

	$: $ancestries, handler.setRows($ancestries.toValueArray());
	const handler = new DataHandler($ancestries.toValueArray());

	onMount(() => {
		hashToSelect($page.url.hash.replaceAll('#', ''));
	});

	setContext('ancestriesPage', {
		showVersatile
	});

	// "if (selected)" basically checks if the page is loaded, as per code above.
	$: if (selected) hashToSelect($page.url.hash.replaceAll('#', ''));

	function hashToSelect(hash) {
		let [ancestry, extra] = decodeURI(hash).split('@');
		// TODO: This can actually use closest-match instead, just make sure to make a toast that the hash in invalid and picked the closest one instead.
		if (!ancestry.includes('_')) {
			ancestry = ancestry + '_crb';
		}

		let heritage;
		if (extra) {
			heritage = extra.split('?')[0];
		}

		if (!$ancestries.size && !$heritages.size) {
			// Give time to load the ancestries
			setTimeout(() => {
				hashToSelect(hash);
			}, 100);
		} else if (ancestry && $ancestries.has(ancestry)) {
			let preSelect = $ancestries.get(ancestry);
			if (heritage && $heritages.has(heritage)) {
				preSelect.selectedHeritage = $heritages.get(heritage);
			} else {
				preSelect.selectedHeritage = null;
			}
			selected = preSelect;
		} else {
			selected = $ancestries.firstValue();
			return (window.location = '#' + selected.hash);
		}
	}
</script>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>

<div class="container md:flex h-[90vh]">
	<div class="view-col md:w-1/2 xl:w-2/3 h-1/2 md:h-full bg-surface-100-800-token">
		<FilterBox {handler} {selected}>
			<svelte:fragment slot="header">
				<thead>
					<tr class="bg-surface-100-800-token">
						<Th {handler} orderBy="name">Name</Th>
						<Th {handler} orderBy="size">Size</Th>
						<Th {handler} orderBy="hp">Health</Th>
						<Th {handler} orderBy="source">Source</Th>
					</tr>
					<tr class="bg-surface-200-700-token">
						<ThFilter {handler} filterBy="name" />
						<ThFilter {handler} filterBy="size" />
						<ThFilter {handler} filterBy="hp" />
						<ThFilter {handler} filterBy="source" />
					</tr>
				</thead>
			</svelte:fragment>
			<svelte:fragment slot="row" let:row let:selected>
				<tr
					class="hover:bg-surface-200-700-token"
					class:selected={row.hash === selected.hash ?? false}
				>
					<td>
						<a href="#{row.hash}" class="px-5 flex flex-grow unstyled">
							{row.name}
						</a>
					</td>
					<td>
						<a href="#{row.hash}" class="px-5 flex flex-grow unstyled" tabindex="-1">
							{row.size.map((x) => x.toTitleCase()).joinConjunct(', ', ' or ')}
						</a>
					</td>
					<td>
						<a href="#{row.hash}" class="px-5 flex flex-grow unstyled" tabindex="-1">
							{row.hp}
						</a>
					</td>
					<td>
						<a href="#{row.hash}" class="px-5 flex flex-grow unstyled" tabindex="-1">
							{row.source}
						</a>
					</td>
				</tr>
				{#if row.hash === selected.hash}
					{#each row.heritages
						.toValueArray()
						.filter((x) => ($showVersatile ? true : !x.versatile)) as heritage}
						{@const ancHerHash = row.hash + '@' + heritage.hash}
						<tr
							class="bg-surface-200-700-token hover:bg-surface-300-600-token text-sm"
							class:versatile={heritage.versatile}
							class:selected={ancHerHash ===
								row.hash + '@' + selected?.selectedHeritage?.hash ?? false}
						>
							<td>
								<a href="#{ancHerHash}" class="px-10 flex flex-grow unstyled">
									{heritage.shortName ?? heritage.name}
								</a>
							</td>
							<td>
								<a
									href="#{ancHerHash}"
									class="px-5 flex flex-grow unstyled"
									tabindex="-1"
								>
									—
								</a>
							</td>
							<td>
								<a
									href="#{ancHerHash}"
									class="px-5 flex flex-grow unstyled"
									tabindex="-1"
								>
									{heritage?.modif?.hp?.ancestry ?? '—'}
								</a>
							</td>
							<td>
								<a
									href="#{ancHerHash}"
									class="px-5 flex flex-grow unstyled"
									tabindex="-1"
								>
									{heritage.source}
								</a>
							</td>
						</tr>
					{/each}
				{/if}
			</svelte:fragment>
		</FilterBox>
	</div>
	<div class="view-col md:w-2/4 md:px-4">
		<DisplayBox {selected} maxHeight={'max-h-[85vh]'} />
		<div class="p-0.5">
			<span
				class="chip {$showVersatile ? 'variant-ghost-surface' : 'variant-ghost-primary'}"
				on:click={() => {
					$showVersatile = !$showVersatile;
				}}
				on:keypress
			>
				{$showVersatile ? 'Hide' : 'Show'} Versatile Heritages
			</span>
		</div>
	</div>
</div>

<svelte:window
	on:hashchange={(e) => {
		let hash = e.newURL.split('#')[1];
		hashToSelect(hash);
	}}
/>
