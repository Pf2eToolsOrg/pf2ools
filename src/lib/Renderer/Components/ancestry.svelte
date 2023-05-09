<script>
	import Renderer from '../Renderer.svelte';
	import { note as Note } from '../Tags/index.js';
	import Tagger from '../Tagger.svelte';
	import { pluralIf } from '$lib/Utils/MiscUtils.js';
	export let entry;

	function copy(text) {
		navigator.clipboard.writeText(text);
	}

	function speedArray(speeds) {
		return Object.keys(speeds).map(
			(s) => `${s === 'walk' ? '' : s.toTitleCase()} ${speeds[s]} feet`
		);
	}
</script>

<div class="font-good-pro">
	<div class="flex font-good-pro-condensed text-[1.35em] uppercase leading-[1] font-bold">
		<span
			class="stats-name cursor-copy"
			on:click={copy(entry.name)}
			on:keypress
			title="Copy to Clipboard"
		>
			<Tagger entry={entry.name} />
		</span>
		<span class="stats-type ml-auto pl-4">
			{entry.type}
		</span>
	</div>
	<hr />

	<div class="traits">
		{#each entry.traits as trait}
			<span class="trait">
				{trait}
			</span>
		{/each}
	</div>

	<div class="stat-line">
		{#if entry.hp}
			<div>
				<b>Health Points</b>
				{#if entry.extraHp}
					{entry.hp}<Note
						text={entry.extraHp.map(
							(x) => `{@ancestry ${entry.heritages.get(x.hash).tag(`/${x.hp}`)}}`
						)}
						noItalics={true}
					/>
				{:else}
					{entry.hp}
				{/if}
			</div>
		{/if}
		<div>
			{#if entry.boosts?.length}
				<b>Boost{pluralIf(entry.boosts)}</b>
				{entry.boosts
					?.map((x) => x.toTitleCase())
					.joinConjunct(
						', ',
						' and '
					)}{#if entry.boosts?.length && entry.flaws?.length};{/if}
			{/if}
			{#if entry.flaws?.length}
				<b>Flaw{pluralIf(entry.flaws)}</b>
				{entry.flaws?.map((x) => x.toTitleCase()).joinConjunct(', ', ' and ')}
			{/if}
		</div>
		{#if entry.speed}
			<div>
				<b>Speed{pluralIf(entry.speed)}</b>
				{speedArray(entry.speed).joinConjunct(', ', ' and ')}
			</div>
		{/if}
	</div>

	{#if entry.flavor?.length}
		<hr />
		<div>
			<Renderer entries={entry.flavor} />
		</div>
	{/if}
</div>

<style style="scss">
	.stat-line {
		line-height: 1.3em;
		margin: 0.25em 0;
	}
	hr {
		border: 0;
		border-top: 1px solid #ccc;
		margin: 0.1em -0.3em;
	}
</style>
