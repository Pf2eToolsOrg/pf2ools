<script>
	import HoverWrapper from "./Misc/hoverWrapper.svelte";
	import { heritage as Heritage } from "$lib/Renderer/Components/index.js";
	import { writable } from "svelte/store";
	import Storage from "Storage";
	import { popup } from "@skeletonlabs/skeleton";
	import { hashify } from "$lib/Data/DataUtils.js";
	import { splitTagByPipe } from "$lib/Utils/Parser";
	import { get } from "svelte/store";
	import Tagger from "tagger";
	export let text;
	export let popupOpts = {};

	const [ancestry, source, displayText, heritage, heritageSource] = splitTagByPipe(text);

	const h = (a, b) => hashify(a, b);

	const href = h(ancestry, source) + (heritage ? "@" + h(heritage, heritageSource) : "");

	const randomHash = (Math.random() + 1).toString(36).substring(7);

	let hovered = false;
	let windowed = writable(false);

	let hashedHref = href + "-" + randomHash;

	let popupData = {
		event: "hover",
		target: hashedHref,
		middleware: { inline: {} },
		closeQuery: "close-" + hashedHref,
		...popupOpts,
	};
</script>

<HoverWrapper dataPopup={hashedHref} {windowed}>
	{#if hovered}
		<Heritage entry={get(new Storage().heritages).get(h(heritage, heritageSource))} />
	{/if}
</HoverWrapper>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a
	href={"ancestries#" + href}
	class="unstyled"
	on:mouseover={() => {
		hovered = true;
	}}
	on:mousemove={(e) => {
		if (e.shiftKey) {
			$windowed = true;
		}
	}}
	use:popup={popupData}
>
	<Tagger entry={displayText ?? heritage} />
</a>
