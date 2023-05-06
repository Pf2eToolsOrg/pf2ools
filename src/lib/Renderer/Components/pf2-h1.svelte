<script>
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';

	export let entry;
</script>

{#if entry.name}
	<span class="text-4xl font-taroca text-center font-bold relative m-0 uppercase pt-2"
		><Tagger entry={entry.name} /></span
	>
{/if}
{#if entry?.entries?.length > 0}
	{#each entry.entries as subentry}
		<p>
			<Renderer entries={subentry} />
		</p>
	{/each}
{/if}
