<script>
	import { hashify } from '$lib/Data/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/Parser';
	import Tagger from 'tagger';
	export let text;

	const [item, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(item, source);
</script>

<a href={'items#' + href} class="unstyled">
	<Tagger entry={displayText ?? item} />
</a>
