<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	export let entry;
</script>

<div class="flex">
	<div class="pf2-box red">
		{#if entry.name}
			<span class="title">{@html TagRenderer(entry.name)}</span>
		{/if}
		{#if entry?.entries?.length > 0}
			<div>
				<Renderer entries={entry.entries} />
			</div>
		{/if}
	</div>
</div>
