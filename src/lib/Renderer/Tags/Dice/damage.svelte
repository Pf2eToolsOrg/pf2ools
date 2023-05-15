<script>
	import Tagger from 'tagger';
	import { splitTagByPipe } from '$lib/Utils/Parser';
	import { Roller } from './diceStore';
	export let text;

	const [dice, displayText] = splitTagByPipe(text);

	function roll(dice, e) {
		if (e.shiftKey) {
			new Roller().quickRoll(`(${dice})*2`);
		} else if (e.ctrlKey) {
			new Roller().quickRoll(`max(floor((${dice})/2), 1)`);
		} else {
			new Roller().quickRoll(dice);
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<span on:keydown on:click={(e) => roll(dice, e)} class="clickable" tabindex="0" title={dice}>
	<Tagger entry={displayText ?? dice} />
</span>
