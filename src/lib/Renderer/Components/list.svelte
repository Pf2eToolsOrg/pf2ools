<script>
	import TagRenderer from '../TagRenderer.js';
	import Renderer from '../Renderer.svelte';
	export let entry;
</script>

{#if entry.name}
	<span class="">{@html TagRenderer(entry.name)}</span>
{/if}
{#if entry?.items?.length > 0}
	<ul class={entry.style ?? 'list-disc'}>
		{#each entry.items as item}
			{#if item.type !== 'list'}
				<li>
					<Renderer entries={item} />
				</li>
			{:else}
				<Renderer entries={item} />
			{/if}
		{/each}
	</ul>
{/if}
