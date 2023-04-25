<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	export let entry;
</script>

<div>
	{#if entry.name}
		<h2>{@html TagRenderer(entry.name)}</h2>
	{/if}
	{#if entry?.entries?.length > 0}
		<div>
			<Renderer entries={entry.entries} />
		</div>
	{/if}
</div>
