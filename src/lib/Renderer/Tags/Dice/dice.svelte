<script>
	import Tagger from 'tagger';
	import { Roller } from './diceStore';
	export let text;

	function roll(text) {
		new Roller().quickRoll(text);
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<span on:keydown on:click={() => roll(text)} class="clickable" tabindex="0">
	<Tagger entry={text} />
</span>
