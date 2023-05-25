<script>
	import { hashify } from '$lib/Data/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/Parser';
	import Tagger from 'tagger';
	export let text;

	const [trait, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(trait, source);
</script>

<a href={'traits#' + href} class="unstyled">
	<Tagger entry={displayText ?? trait} />
</a>
