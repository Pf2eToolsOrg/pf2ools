<script>
	import Tagger from "tagger";
	export let text;
	export let noItalics = false;
</script>

{#if noItalics}
	<span class="text-zinc-600 dark:opacity-75 grayscale-[.5] dark:grayscale-0">
		<Tagger entry={text} />
	</span>
{:else}
	<i class="text-zinc-600 dark:opacity-75 grayscale-[.5] dark:grayscale-0">
		<Tagger entry={text} />
	</i>
{/if}
