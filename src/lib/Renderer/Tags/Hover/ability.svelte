<script>
	import { hashify } from "$lib/Data/DataUtils.js";
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [ability, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(ability, source);
</script>

<a href={"abilities#" + href} class="unstyled">
	<Tagger entry={displayText ?? ability} />
</a>
