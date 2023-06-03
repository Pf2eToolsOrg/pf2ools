<script>
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [domain, displayText] = splitTagByPipe(text);

	// Really, this is just a fancy @filter tag with a hover. TODO: Make it so.
</script>

<a href={"spells#blankhash" + `,flstdomain${domain}=1`} class="unstyled">
	<Tagger entry={displayText ?? domain} />
</a>
