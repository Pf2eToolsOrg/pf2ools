<script>
	import Ability from "./ability.svelte";
	import Renderer from "../Renderer.svelte";
	import Tagger from "../Tagger.svelte";
	import Traits from "./Misc/traits.svelte";
	import Source from "./Misc/source.svelte";
	export let entry;
	export let hideTraits = false;
	export let inline = false;

	function copy(text, event) {
		navigator.clipboard.writeText(text);
	}
</script>

{#if inline}
	<Ability {entry} />
{:else}
	<div class="font-good-pro pf2ools wrp-stats">
		<div class="flex font-good-pro-condensed text-[1.35em] uppercase leading-[1] font-bold">
			<button
				class="cursor-copy uppercase"
				on:click={(e) => copy(entry.name, e)}
				on:keypress={(e) => copy(entry.name, e)}
				title="Copy to Clipboard"
			>
				<Tagger entry={entry.name} />
			</button>
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
{/if}
