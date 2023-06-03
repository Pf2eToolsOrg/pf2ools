<script>
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [displayText, page, ...filters] = splitTagByPipe(text);

	//TODO: I need to actually make filters first to make sense of how I'm gonna encode it in an URL
</script>

<a href="{page}#blankhash,{filters}" class="unstyled">
	<Tagger entry={displayText} />
</a>
