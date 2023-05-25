<script>
	export let data;
	export let field;
	export let selected;

	import { DataHandler, Datatable, Th, ThFilter } from '@vincjo/datatables';

	const handler = new DataHandler(data.toValueArray());
	const rows = handler.getRows();

	console.log(handler);
	// https://vincjo.fr/datatables/home
</script>

<Datatable {handler} rowsPerPage={false} rowCount={false} pagination={false}>
	<table>
		<thead>
			<tr>
				<Th {handler} orderBy="name">Name</Th>
				<Th {handler} orderBy="source">Source</Th>
			</tr>
			<tr>
				<ThFilter {handler} filterBy="name" />
				<ThFilter {handler} filterBy="source" />
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.name}</td>
					<td>{row.source}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Datatable>
