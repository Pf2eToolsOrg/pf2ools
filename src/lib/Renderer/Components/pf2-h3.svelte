<script>
	import Renderer from '../Renderer.svelte';
	import TagRenderer from '../TagRenderer.js';
	import { slide } from 'svelte/transition';
	import { writable } from 'svelte/store';
	export let entry;

	let collapse = writable(false);

	function click() {
		$collapse = !$collapse;
	}
</script>

<div class="unstyled">
	<p class="pf2-h3">
		{#if entry.name}
			<span class="entry-title-inner">{@html TagRenderer(entry.name)}</span>
		{/if}
		{#if entry.collapsible}
			<button class="no-select collapsible" on:keypress on:click={click}>
				{$collapse ? '[+]' : '[-]'}
			</button>
		{/if}
	</p>
	{#if !$collapse}
		{#if entry?.entries?.length > 0}
			{#each entry.entries as subentry}
				<p class="pf2-p" transition:slide={{ duration: 400 }}>
					<Renderer entries={subentry} />
				</p>
			{/each}
		{/if}
	{/if}
</div>
