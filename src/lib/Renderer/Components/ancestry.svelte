<script>
	import { pluralIf } from '$lib/Utils/MiscUtils.js';
	import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Renderer from '../Renderer.svelte';
	import Tagger from '../Tagger.svelte';
	import { note as Note } from '../Tags/index.js';
	import Traits from './Misc/traits.svelte';
	import Source from './Misc/source.svelte';
	import { getContext } from 'svelte';
	import { popup } from '@skeletonlabs/skeleton';
	export let entry;

	const { showVersatile } = getContext('ancestriesPage');

	function copy(text, event) {
		navigator.clipboard.writeText(text);
	}

	function speedArray(speeds) {
		return Object.keys(speeds).map(
			(s) => `${s === 'walk' ? '' : s.toTitleCase()} ${speeds[s]} feet`
		);
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

	<div class="stat-line">
		<Traits traits={entry.traits} classes="my-1" />
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
		{#if entry.languages}
			<div>
				<b>Language{pluralIf(entry.languages)}</b>
				{#if entry.languageNote}
					<button
						class="align-text-top text-sm"
						use:popup={{
							event: 'focus-click',
							placement: 'top',
							target: `language-note-pop-${entry.hash}`
						}}
					>
						<Fa icon={faCircleInfo} />
					</button>
					<div class="card p-2 w-60 z-10" data-popup={`language-note-pop-${entry.hash}`}>
						<b>Note:</b>
						<Renderer entries={entry.languageNote} />
						<div class="arrow bg-surface-100-800-token" />
					</div>
				{/if}
				<Renderer
					entries={entry.languages
						.map((x) => `{@language ${x.toTitleCase()}}`)
						.joinConjunct(', ', ' and ')}
				/>{#if entry.additionalLanguages};
					<b>Additional Language{pluralIf(entry.additionalLanguages)}</b>
					<Renderer
						entries={entry.additionalLanguages
							.map((x) => `{@language ${x.toTitleCase()}}`)
							.joinConjunct(', ', ' and ')}
					/>
				{/if}
			</div>
		{/if}
		{#if entry.heritages.size}
			<div>
				<b>Heritage{pluralIf(entry.heritages)}</b>
				<Tagger
					entry={entry.heritages
						.toValueArray()
						.filter((x) => ($showVersatile ? true : !x.versatile))
						.map((x) => `{@ancestry ${x.tag(x.shortName)}}`)
						.join(', ')}
				/>
			</div>
		{/if}
	</div>

	<hr />
	<div>
		<Renderer entries={entry.entries} />
	</div>

	{#if entry.features?.length}
		<hr />
		<div>
			<div class="stat-line">
				<Renderer
					entries={entry.features.map((x) => ({ type: 'ability', toggle: true, ...x }))}
				/>
			</div>
		</div>
	{/if}

	{#if entry.selectedHeritage}
		<div>
			<Renderer entries={entry.selectedHeritage} />
		</div>
	{/if}

	<footer>
		<Source {entry} />
	</footer>
</div>
