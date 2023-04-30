<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	export let entry;
</script>

{#if entry.name}
	<h1>{@html TagRenderer(entry.name)}</h1>
{/if}
{#if entry?.entries?.length > 0}
	{#each entry.entries as subentry}
		<p>
			<Renderer entries={subentry} />
		</p>
	{/each}
{/if}
