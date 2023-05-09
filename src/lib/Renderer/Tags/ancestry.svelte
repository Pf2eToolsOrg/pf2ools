<script>
	import { hashify } from '$lib/Utils/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/SplitTags.js';
	import Tagger from 'tagger';
	export let text;

	const [ancestry, source, displayText, heritage, heritageSource] = splitTagByPipe(text);

	console.log(heritage);
	const h = (a, b) => hashify(a, b);
</script>

<a href={'ancestries#' + h(ancestry, source) + (heritage ? '?' + h(heritage, heritageSource) : '')}>
	<Tagger entry={displayText ?? ancestry} />
</a>
