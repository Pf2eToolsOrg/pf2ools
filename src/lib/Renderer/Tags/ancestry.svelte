<script>
	import Ancestry from '$lib/Renderer/Components/ancestry.svelte';
	import { hashify } from '$lib/Utils/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/SplitTags.js';
	import Tagger from 'tagger';
	export let text;
	import Hover from '$lib/Renderer/Hover.svelte';

	const [ancestry, source, displayText, heritage, heritageSource] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(ancestry, source) + (heritage ? '?' + h(heritage, heritageSource) : '');
</script>

<a href={'ancestries#' + href} class="unstyled">
	<Tagger entry={displayText ?? ancestry} />
</a>
