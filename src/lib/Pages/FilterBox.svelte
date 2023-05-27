<script>
	import { Datatable, Th, ThFilter } from '@vincjo/datatables';
	export let selected = {};
	export let handler;

	// https://vincjo.fr/datatables/home
	const rows = handler.getRows();
</script>

<Datatable {handler} rowsPerPage={false} rowCount={false} pagination={false}>
	<table>
		<thead>
			<slot name="header" {handler}>
				<tr class="bg-surface-300-600-token">
					<Th {handler} orderBy="name">Name</Th>
					<Th {handler} orderBy="source">Source</Th>
				</tr>
				<tr class="bg-surface-200-700-token">
					<ThFilter {handler} filterBy="name" />
					<ThFilter {handler} filterBy="source" />
				</tr>
			</slot>
		</thead>
		<tbody>
			{#each $rows as row}
				<slot name="row" {row}>
					<tr
						class="bg-[#cbcbcb] hover:bg-[#d3d3d3] dark:bg-[#222] dark:hover:bg-[#333]"
						class:selected={selected.hash === row.hash ?? false}
					>
						<td>
							<a href="#{row.hash}" class="px-5 flex flex-grow unstyled">
								{row.name}
							</a>
						</td>
						<td>
							<a
								href="#{row.hash}"
								class="px-5 flex flex-grow unstyled"
								tabindex="-1"
							>
								{row.source}
							</a>
						</td>
					</tr>
				</slot>
			{/each}
		</tbody>
	</table>
</Datatable>

<style lang="scss">
	.selected {
		background-color: #416482;
		color: #fff;
	}

	:global(html.dark) .selected {
		box-shadow: inset 0 0 0 200px rgba(0, 107, 196, 0.3);
	}
</style>
