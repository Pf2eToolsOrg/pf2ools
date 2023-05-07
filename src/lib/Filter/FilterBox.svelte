<script>
	export let data;
	export let field;

	let search = '';

	$: regex = search ? new RegExp(search, 'i') : null;
	$: matches = (item) => (regex ? regex.test(item[field]) : true);

	// TODO: https://shortbuzz.in/blog/shortbuzz.in/how-to-create-tailwind-css-grid-system-like-the-bootstrap-grid-system
</script>

<div>
	<label>
		<input bind:value={search} />
	</label>

	{#if $$slots.header}
		<div class="header">
			<slot name="header" />
		</div>
	{/if}

	<div class="h-[84vh]">
		{#each data.filter(matches) as item}
			<!-- Slot: List -->
			<a href={`#${item.name}_${item.source}`.toLowerCase()}>
				<div>
					<slot name="list" {item} />
				</div>
			</a>
			<!-- /Slot -->
		{/each}
	</div>
</div>

<style>
	.header {
		font-weight: bold;
	}
</style>
