<script>
	import { splitTagByPipe } from '$lib/Utils/Parser';
	import Tagger from 'tagger';
	export let text;

	const [group, displayText] = splitTagByPipe(text);

	// Really, this is just a fancy @filter tag. TODO: Make it so.
</script>

<a href={'items#' + `?flstgroup${group}=1`} class="unstyled">
	<Tagger entry={displayText ?? group} />
</a>
