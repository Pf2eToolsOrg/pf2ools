<script>
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [displayText, url] = splitTagByPipe(text);
	let outUrl = url == null ? displayText : url;
	if (!outUrl.startsWith("http")) outUrl = `http://${outUrl}`;
</script>

<a class="unstyled pf2ools" href={outUrl}><Tagger entry={displayText} /></a>
