<script>
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	export let entry;
</script>

<div class="-indent-4 pl-4">
	{#if entry.name}
		<span class="font-bold"><Tagger entry={entry.name} /></span>
	{/if}
	{#if entry?.entries?.length > 0}
		<Renderer entries={entry.entries} />
	{/if}
</div>
