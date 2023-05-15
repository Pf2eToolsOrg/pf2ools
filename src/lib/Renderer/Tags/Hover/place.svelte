<script>
	import { hashify } from '$lib/Utils/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/Parser';
	import Tagger from 'tagger';
	export let text;

	const [place, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(place, source);
</script>

<a href={'places#' + href} class="unstyled">
	<Tagger entry={displayText ?? place} />
</a>
