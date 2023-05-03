<script>
	import Tagger from '../Tagger.svelte';
	import Renderer from '../Renderer.svelte';
	export let entry;
</script>

<div class="flex">
	<div class="box red">
		{#if entry.name}
			<span class="title"><Tagger entry={entry.name} /></span>
		{/if}
		{#if entry?.entries?.length > 0}
			<div>
				<Renderer entries={entry.entries} />
			</div>
		{/if}
	</div>
</div>
