<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	export let entry;

	let collapse = false;

	function click() {
		collapse = !collapse;
	}
</script>

<div>
	<p>
		{#if entry.name}
			<span class="h4 font-gin">{@html TagRenderer(entry.name)}</span>
		{/if}
		{#if entry.collapsible}
			<button class="ml-auto select-none" on:keypress on:click={click}>
				{collapse ? '[+]' : '[\u2012]'}
			</button>
		{/if}
	</p>
	{#if !collapse}
		{#if entry?.entries?.length > 0}
			{#each entry.entries as subentry}
				<p>
					<Renderer entries={subentry} />
				</p>
			{/each}
		{/if}
	{/if}
</div>
