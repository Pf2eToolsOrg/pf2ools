<script>
	import Toast from '$lib/Utils/Toasts.js';
	import * as Components from './Components/index.js';
	import Tagger from './Tagger.svelte';
	export let entries;

	let error = false;
	function getComponent(entry) {
		let type = 'entries';
		if (!entry.type) {
			new Toast().error('Entry type is not defined!');
			error = true;
		} else {
			type = entry.type.replaceAll('-', '_').toLowerCase();
		}

		if (!Object.keys(Components).includes(type)) {
			new Toast().error(
				`Entry type "${entry.type}" is not recognized by the component renderer!`
			);
			type = 'entries';
			error = true;
		}

		return Components[type];
	}

	$: if (!Array.isArray(entries)) {
		entries = [entries];
	}

	$: if (entries.filter((x) => !!x).length === 0) {
		entries = ['{@note No entries found.}'];
	}
</script>

{#each entries as entry}
	{#if typeof entry === 'string'}
		<Tagger {entry} />
	{:else if typeof entry === 'object'}
		<svelte:component this={getComponent(entry)} {entry} {error} />
	{/if}
{/each}
