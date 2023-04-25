<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	import { writable } from 'svelte/store';
	export let entry;

	let collapse = writable(false);

	function click() {
		$collapse = !$collapse;
	}
</script>

<div>
	<p class="pf2-h3 flex">
		{#if entry.name}
			<span class="entry-title-inner">{@html TagRenderer(entry.name)}</span>
		{/if}
		{#if entry.collapsible}
			<button class="ml-auto" on:keypress on:click={click}>
				{$collapse ? '[+]' : '[\u2012]'}
			</button>
		{/if}
	</p>
	{#if !$collapse}
		{#if entry?.entries?.length > 0}
			{#each entry.entries as subentry}
				<p>
					<Renderer entries={subentry} />
				</p>
			{/each}
		{/if}
	{/if}
</div>

<style>
	.pf2-h3 {
		display: flex;
		align-items: center;
		margin: 0;
	}

	.pf2-h3 .entry-title-inner {
		margin: 0;
		font-family: 'Gin', sans-serif;
		font-size: 1.2em;
	}

	.pf2-h3 button {
		user-select: none;
	}
</style>
