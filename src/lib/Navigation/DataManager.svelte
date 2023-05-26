<script>
	import Storage from 'Storage';

	const dataStorage = new Storage();
	const { ancestries, heritages } = dataStorage;
</script>

<div class="card bg-surface-100-800-token px-4 py-2">
	<div class="text-center">
		<h2 class="text-2xl pb-2">Data Manager</h2>
		<div>
			{$ancestries.size || '❌'}
			<b>Ancestries</b>
		</div>
		<div>
			{$heritages.size || '❌'}
			<b>Heritages</b>
		</div>
	</div>
	<div class="text-center mt-4">
		<button
			class="btn bg-error-200-700-token"
			on:click={() => {
				localStorage.clear();
				location.reload();
			}}
		>
			Clear Local Storage
		</button>
		<button class="btn bg-success-300-600-token" on:click={() => dataStorage.loadAll()}>
			Preload All Data
		</button>
	</div>
</div>
