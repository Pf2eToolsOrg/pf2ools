<script>
	export let entry;
	import * as Tags from './Tags/index.js';
	import { splitByTags, splitFirstSpace } from '$lib/Utils/Parser.js';
	import { isObject } from '$lib/Utils/MiscUtils.js';

	function renderString(string) {
		const tagSplit = splitByTags(string);
		const len = tagSplit.length;

		let finishedString = [];

		for (let i = 0; i < len; ++i) {
			const s = tagSplit[i];
			if (!s) continue;
			if (s.startsWith('{@')) {
				const [tag, text] = splitFirstSpace(s.slice(1, -1));
				finishedString.push({
					type: tag.remove('@'),
					text: text,
					ogText: s
				});
			} else {
				finishedString.push(s);
			}
		}
		return finishedString;
	}
</script>

{#each renderString(entry) as entry}
	{#if typeof entry === 'string'}
		{entry}
	{:else if isObject(entry) && Tags[entry.type]}
		<svelte:component this={Tags[entry.type]} {...entry} />
	{:else if isObject(entry) && !Tags[entry.type]}
		<svelte:component this={Tags['highlight']} text={entry.ogText} error={entry.type} />
	{/if}
{/each}
