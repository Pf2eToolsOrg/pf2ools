<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	import { fly } from 'svelte/transition';
	export let entry;

	let collapse = false;

	function click() {
		collapse = !collapse;
	}
</script>

<div>
	<p class="flex">
		{#if entry.name}
			<span class="h3 font-gin">{@html TagRenderer(entry.name)}</span>
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
				<p transition:fly={{ y: -10, duration: 500 }}>
					<Renderer entries={subentry} />
				</p>
			{/each}
		{/if}
	{/if}
</div>
