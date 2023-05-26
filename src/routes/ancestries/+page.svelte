<script>
	import { DataHandler, Datatable, Th, ThFilter } from '@vincjo/datatables';
	import Storage from 'Storage';
	const { ancestries, heritages } = new Storage();
	ancestries.load();
	let selected;

	$: $ancestries, handler.setRows($ancestries.toValueArray());
	const handler = new DataHandler($ancestries.toValueArray());
	const rows = handler.getRows();
</script>

<svelte:head>
	<title>{selected ? selected.name : 'Ancestries'} - PF2ools</title>
</svelte:head>

<div class="container flex h-[90vh]">
	<div class="view-col w-1/2">
		<Datatable {handler} rowsPerPage={false} rowCount={false} pagination={false}>
			<table>
				<thead>
					<tr class="bg-surface-300-600-token">
						<Th {handler} orderBy="name">Name</Th>
						<Th {handler} orderBy="source">Source</Th>
					</tr>
					<tr class="bg-surface-200-700-token">
						<ThFilter {handler} filterBy="name" />
						<ThFilter {handler} filterBy="source" />
					</tr>
				</thead>
				<tbody>
					{#each $rows as row}
						<tr
							class="bg-[#cbcbcb] hover:bg-[#d3d3d3] dark:bg-[#222] dark:hover:bg-[#333]"
						>
							<td class="px-5">
								<a href="#{row.hash}" class="flex unstyled">{row.name}</a>
							</td>
							<td class="px-5">
								<a href="#{row.hash}" class="flex unstyled">{row.source}</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</Datatable>
	</div>
	<div class="view-col w-1/2 p-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
</div>

<style lang="scss">
	.selected {
		background-color: #416482;
		color: #fff;
	}

	:global(html.dark) .selected {
		box-shadow: inset 0 0 0 200px rgba(0, 107, 196, 0.3);
	}
</style>
