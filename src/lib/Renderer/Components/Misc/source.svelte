<script>
	import { source } from '$data/sources.json';
	export let entry;

	function toFullSource(src) {
		return source.find((s) => s.source === src).name;
	}
</script>

<p class="font-good-pro text-xs -mb-1 text-right italic">
	— {toFullSource(entry.source)}{#if entry.page}, p. {entry.page}{/if}
</p>
