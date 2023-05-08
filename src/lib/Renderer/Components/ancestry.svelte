<script>
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	export let entry;
</script>

<div>
	{#if entry.name}
		<span class="text-2xl font-bold"><Tagger entry={entry.name} /></span>
	{/if}
	{#if entry?.entries?.length > 0}
		<div>
			<Renderer entries={entry.entries} />
		</div>
	{/if}
</div>
