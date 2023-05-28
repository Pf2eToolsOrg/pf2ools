<script>
	import { pluralIf } from '$lib/Utils/MiscUtils.js';
	import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	import { note as Note } from '../Tags/index.js';
	import Traits from './Misc/traits.svelte';
	import Source from './Misc/source.svelte';
	import { popup } from '@skeletonlabs/skeleton';
	export let entry;
	export let hideTraits = false;

	function copy(text, event) {
		navigator.clipboard.writeText(text);
	}
</script>

<div class="font-good-pro pf2ools wrp-stats">
	<div class="flex font-good-pro-condensed text-[1.35em] uppercase leading-[1] font-bold">
		<span
			class="cursor-copy"
			on:click={(e) => copy(entry.name, e)}
			on:keypress={(e) => copy(entry.name, e)}
			title="Copy to Clipboard"
		>
			<Tagger entry={entry.name} />
		</span>
		<span class="ml-auto pl-4">
			{entry.type}
		</span>
	</div>
	<hr />

	{#if entry.traits && !hideTraits}
		<div class="stat-line">
			<Traits traits={entry.traits} classes="my-1" />
		</div>
	{/if}

	<div>
		<Renderer entries={entry.entries} />
	</div>

	<footer>
		<Source {entry} />
	</footer>
</div>
