<script context="module">
	export function getValidColor(color) {
		const hexTest = /^(#|)([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i;
		if (hexTest.test(color)) {
			return `#${color.replace("#", "")}`;
		} else if (typeof color === "string") {
			if (color.startsWith("--")) {
				return `rgb(var(${color}))`;
			} else {
				const colors = color.split(",").map((c) => parseFloat(c.trim()));
				return `rgba(${colors})`;
			}
		} else {
			return null;
		}
	}
</script>

<script>
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import Tagger from "tagger";
	export let text;

	$: [entry, color] = [...splitTagByPipe(text)];
</script>

<span style="color: {getValidColor(color)}"><Tagger {entry} /></span>
