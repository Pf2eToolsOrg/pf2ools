<script>
	import Toast from '$lib/Utils/Toasts.js';
	import * as Components from './Components/index.js';
	import Tagger from './Tagger.svelte';
	export let entries;

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
		<Tagger {entry} />
	{:else if typeof entry === 'object'}
		<svelte:component this={getComponent(entry)} {entry} />
	{/if}
{/each}
