<script>
	import { hashify } from "$lib/Data/DataUtils.js";
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [ancestry, source, displayText, heritage, heritageSource] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(ancestry, source) + (heritage ? "@" + h(heritage, heritageSource) : "");
</script>

<a href={"ancestries#" + href} class="unstyled">
	<Tagger entry={displayText ?? ancestry} />
</a>
