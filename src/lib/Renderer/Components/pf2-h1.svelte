<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	export let entry;
</script>

<div>
	{#if entry.name}
		<h1>{@html TagRenderer(entry.name)}</h1>
	{/if}
	{#if entry?.entries?.length > 0}
		<div>
			<Renderer entries={entry.entries} />
		</div>
	{/if}
</div>
