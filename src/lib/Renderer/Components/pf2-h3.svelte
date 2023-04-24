<script>
	import Renderer from '../Renderer.svelte';
	export let entry;
</script>

<div>
	{#if entry.name}
		<h2 class="text-2xl font-bold">{entry.name}</h2>
	{/if}
	{#if entry?.entries?.length > 0}
		<div>
			<Renderer entries={entry.entries} />
		</div>
	{/if}
</div>
