<script>
	import { splitTagByPipe } from '$lib/Utils/SplitTags.js';
	import Tagger from 'tagger';
	export let text;

	const [displayText, url] = splitTagByPipe(text);
	let outUrl = url == null ? displayText : url;
	if (!outUrl.startsWith('http')) outUrl = `http://${outUrl}`;
</script>

<a href={outUrl}><Tagger entry={displayText} /></a>
