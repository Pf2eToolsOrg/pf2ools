<script>
	import Renderer from "../Renderer.svelte";
	import Tagger from "../Tagger.svelte";

	export let entry;
</script>

<div>
	{#if entry.name}
		<span class="text-3xl font-taroca"><Tagger entry={entry.name} /></span>
	{/if}
	{#if entry?.entries?.length > 0}
		{#each entry.entries as subentry}
			<p>
				<Renderer entries={subentry} />
			</p>
		{/each}
	{/if}
</div>
