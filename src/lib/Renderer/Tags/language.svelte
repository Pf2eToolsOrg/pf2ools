<script>
	import { hashify } from '$lib/Utils/DataUtils.js';
	import { splitTagByPipe } from '$lib/Utils/SplitTags.js';
	import Tagger from 'tagger';
	export let text;

	const [language, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(language, source);
</script>

<a href={'languages#' + href} class="unstyled">
	<Tagger entry={displayText ?? language} />
</a>
