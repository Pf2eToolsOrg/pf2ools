<script>
	import { hashify } from '$lib/Data/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/Parser';
	import Tagger from 'tagger';
	export let text;

	const [action, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(action, source);
</script>

<a href={'actions#' + href} class="unstyled">
	<Tagger entry={displayText ?? action} />
</a>
