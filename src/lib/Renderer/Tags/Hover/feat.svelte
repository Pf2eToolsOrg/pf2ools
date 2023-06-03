<script>
	import { hashify } from "$lib/Data/DataUtils.js";
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	const [feat, source, displayText] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(feat, source);
</script>

<a href={"feats#" + href} class="unstyled">
	<Tagger entry={displayText ?? feat} />
</a>
