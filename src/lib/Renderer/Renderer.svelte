<script>
	import Toast from '$lib/Utils/Toasts.js';
	import * as Components from './Components/index.js';
	import TagRenderer from './TagRenderer.js';
	export let entries;
	export let options = { noWrap: false };

	function getComponent(entry) {
		if (!entry.type) {
			throw new Error('Entry type is not defined!');
		}

		const type = entry.type.replaceAll('-', '_').toLowerCase();

		if (!Object.keys(Components).includes(type)) {
			new Toast().error(
				new Error(`Entry type "${entry.type}" is not recognized by the component renderer!`)
			);
		}

		return Components[type];
	}

	$: {
		if (!Array.isArray(entries)) {
			entries = [entries];
		}
	}
</script>

{#each entries as entry}
	{#if typeof entry === 'string'}
		{@html TagRenderer(entry, options)}
	{:else if typeof entry === 'object'}
		<svelte:component this={getComponent(entry)} {entry} {options} />
	{/if}
{/each}
