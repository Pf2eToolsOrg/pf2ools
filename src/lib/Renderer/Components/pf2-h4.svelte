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

<div>
	<p>
		{#if entry.name}
			<span>{@html TagRenderer(entry.name)}</span>
		{/if}
		{#if entry.collapsible}
			<button on:keypress on:click={click}>
				{$collapse ? '[+]' : '[-]'}
			</button>
		{/if}
	</p>
	{#if !$collapse}
		{#if entry?.entries?.length > 0}
			{#each entry.entries as subentry}
				<p transition:slide={{ duration: 400 }}>
					<Renderer entries={subentry} />
				</p>
			{/each}
		{/if}
	{/if}
</div>
