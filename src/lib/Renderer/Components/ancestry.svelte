<script>
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	export let entry;

	function copy(text) {
		navigator.clipboard.writeText(text);
	}
</script>

<div>
	<div class="flex font-good-pro-condensed text-[1.35em] uppercase leading-[1] font-bold">
		<span
			class="stats-name cursor-copy"
			on:click={copy(entry.name)}
			on:keypress
			title="Copy to Clipboard"
		>
			<Tagger entry={entry.name} />
		</span>
		<span class="stats-type ml-auto pl-4">
			{entry.type}
		</span>
	</div>
	<hr />

	{#if entry?.entries?.length > 0}
		<div>
			<Renderer entries={entry.entries} />
		</div>
	{/if}
</div>
