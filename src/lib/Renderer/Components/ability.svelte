<script>
	import Fa from 'svelte-fa';
	import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	import { timeToFullEntry } from '$lib/Utils/Parser';
	export let entry;

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

	let visible = entry.visible ?? true;
</script>

<div class="-indent-4 pl-4">
	<span class="font-bold"><Tagger entry={entry.name ?? 'Activate'} /></span>
	{#if entry.activity}
		<Renderer entries={timeToFullEntry(entry.activity)} />
	{/if}

	{#if entry.toggle}
		<button
			class="rounded-md p-[0.20rem] align-text-bottom {visible
				? 'variant-ghost-surface'
				: 'variant-ghost-primary'}"
			on:click={() => (visible = !visible)}
		>
			<Fa icon={visible ? faEye : faEyeSlash} class="btn-icon-sm" />
		</button>
	{/if}

	{#if !entry.toggle || (entry.toggle && visible)}
		<Renderer entries={componentTraitString} />
		<Renderer entries={entry.entries} />
	{:else if entry.summary}
		<Tagger entry={entry.summary} />
	{/if}
</div>
