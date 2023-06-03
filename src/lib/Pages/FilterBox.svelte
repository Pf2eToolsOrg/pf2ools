<script>
	import { Datatable, Th, ThFilter } from "@vincjo/datatables";
	export let selected = {};
	export let handler;

	// https://vincjo.fr/datatables/home
	const rows = handler.getRows();
</script>

<Datatable {handler} rowsPerPage={false} rowCount={false} pagination={false} search={false}>
	<table>
		<slot name="header" {handler}>
			<thead>
				<tr class="bg-surface-100-800-token">
					<Th {handler} orderBy="name">Name</Th>
					<Th {handler} orderBy="source">Source</Th>
				</tr>
				<tr class="bg-surface-200-700-token">
					<ThFilter {handler} filterBy="name" />
					<ThFilter {handler} filterBy="source" />
				</tr>
			</thead>
		</slot>
		<tbody class="whitespace-pre">
			{#each $rows as row}
				<slot name="row" {row} {selected}>
					<tr
						class="bg-surface-100-800-token hover:bg-surface-200-700-token"
						class:selected={selected.hash === row.hash ?? false}
					>
						<td>
							<a href="#{row.hash}" class="px-5 flex flex-grow unstyled">
								{row.name}
							</a>
						</td>
						<td>
							<a href="#{row.hash}" class="px-5 flex flex-grow unstyled" tabindex="-1">
								{row.source}
							</a>
						</td>
					</tr>
				</slot>
			{/each}
		</tbody>
	</table>
</Datatable>
