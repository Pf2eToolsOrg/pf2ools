<script context="module">
	// This "context" lets us export the function from the file itself. See: https://svelte.dev/tutorial/module-exports
	export function getValidColor(color) {
		const hexTest = /^(#|)([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i;
		if (hexTest.test(color)) {
			return `#${color.replace('#', '')}`;
		} else if (typeof color === 'string') {
			const colors = color.split(',').map((c) => parseFloat(c.trim()));
			return `rgba(${colors})`;
		} else {
			return null;
		}
	}
</script>

<script>
	import { splitTagByPipe } from '$lib/Utils/SplitTags.js';
	import Tagger from 'tagger';
	export let text;

	$: [entry, color] = [...splitTagByPipe(text)];
</script>

<span style="color: {getValidColor(color)}"><Tagger {entry} /></span>
