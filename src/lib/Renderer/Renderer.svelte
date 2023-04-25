<script>
	import * as Components from './Components/index.js';
	import TagRenderer from './TagRenderer.js';
	import Toast from '$lib/Utils/toasts.js';
	export let entries;
	export let options = { noWrap: false };

	if (!Array.isArray(entries)) {
		entries = [entries];
	}

	function getComponent(entry) {
		if (!entry.type) {
			throw new Error('Entry type is not defined!');
		}

		const type = entry.type.replaceAll('-', '_').toLowerCase();

		if (!Object.keys(Components).includes(type)) {
			new Toast().error(new Error(`Entry type "${entry.type}" is not recognized by the renderer!`));
		}

		return Components[type];
	}
</script>

{#each entries as entry}
	{#if typeof entry === 'string'}
		{@html TagRenderer(entry, options)}
	{:else if typeof entry === 'object'}
		<svelte:component this={getComponent(entry)} {entry} {options} />
	{/if}
{/each}
