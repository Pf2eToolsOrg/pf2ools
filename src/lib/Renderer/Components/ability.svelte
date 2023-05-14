<script>
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	export let entry;

	import { timeToFullEntry } from '$lib/Utils/Parser';

	// Matches the standard "1 round" and "2 hours", as well as "until it stops raining", but not "{@as 1} to {@as 3}"
	let wordyActivation =
		entry.activity?.unit === 'round' ||
		entry.activity?.unit === 'minute' ||
		entry.activity?.unit === 'hour' ||
		(entry.activity?.entry && !entry.activity?.entry.match(/\{@a(ction)?s[^}]+\}$/));

	let componentTraitString = '';

	if (wordyActivation) {
		if (entry.components) {
			if (entry.traits) {
				componentTraitString += ` (${entry.components.join(', ')}; ${entry.traits
					.map((t) => `{@trait ${t.toLowerCase()}}`)
					.join(', ')}); `;
			} else componentTraitString += ` (${entry.components.join(', ')}); `;
		} else {
			if (entry.traits) {
				componentTraitString += ` (${entry.traits
					.map((t) => `{@trait ${t.toLowerCase()}}`)
					.join(', ')}); `;
			} else componentTraitString += '; ';
		}
	} else {
		if (entry.components) {
			if (entry.traits) {
				componentTraitString += ` ${entry.components.join(', ')} (${entry.traits
					.map((t) => `{@trait ${t.toLowerCase()}}`)
					.join(', ')}); `;
			} else componentTraitString += ` ${entry.components.join(', ')}; `;
		} else {
			// Lack of trailing semicolons below intended
			if (entry.traits) {
				componentTraitString += ` (${entry.traits
					.map((t) => `{@trait ${t.toLowerCase()}}`)
					.join(', ')}) `;
			} else componentTraitString += ' ';
		}
	}
</script>

<div class="-indent-4 pl-4">
	<span class="font-bold"><Tagger entry={entry.name ?? 'Activate'} /></span>
	{#if entry.activity}
		<Renderer entries={timeToFullEntry(entry.activity)} />
	{/if}
	<Renderer entries={componentTraitString} />
	{#if entry?.entries?.length > 0}
		<Renderer entries={entry.entries} />
	{/if}
</div>
