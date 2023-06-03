<script>
	import { hashify } from "$lib/Data/DataUtils.js";
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [skill, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(skill, source);
</script>

<a href={"skills#" + href} class="unstyled">
	<Tagger entry={displayText ?? skill} />
</a>
