<script>
	import { getValidColor } from "./color.svelte";
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import toast from "$lib/Utils/Toasts.js";
	export let text;
	export let error = false;
	import Tagger from "tagger";

	$: [entry, color] = [...splitTagByPipe(text)];
	$: if (error) {
		toast.warn(`Unknown tag <b>"@${error}"</b>!`);
	}
</script>

<span
	style={color ? `background-color: ${getValidColor(color)}` : null}
	class={!color ? "bg-warning-300-600-token" : null}
>
	{#if error}
		{entry}
	{:else}
		<Tagger {entry} />
	{/if}
</span>
