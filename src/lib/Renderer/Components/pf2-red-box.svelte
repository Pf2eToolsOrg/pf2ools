<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	export let entry;
</script>

<div class="flex">
	<div>
		{#if entry.name}
			<span class="text-2xl font-bold">{@html TagRenderer(entry.name)}</span>
		{/if}
		{#if entry?.entries?.length > 0}
			<div>
				<Renderer entries={entry.entries} />
			</div>
		{/if}
	</div>
</div>
