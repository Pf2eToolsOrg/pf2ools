<script>
	import { source } from "$data/sources.json";
	export let entry;

	function toFullSource(src) {
		return source.find((x) => x.source === src).name;
	}
</script>

<p class="font-good-pro text-xs -mb-0.5 mt-1.5 text-right italic">
	— {toFullSource(entry.source)}{#if entry.page}, p. {entry.page}{/if}
</p>
