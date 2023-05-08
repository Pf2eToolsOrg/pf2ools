<script>
	import Tagger from 'tagger';
	export let text;
	export let noItalics = false;
</script>

{#if noItalics}
	<span class="text-zinc-500"><Tagger entry={text} /></span>
{:else}
	<i class="text-zinc-500"><Tagger entry={text} /></i>
{/if}
