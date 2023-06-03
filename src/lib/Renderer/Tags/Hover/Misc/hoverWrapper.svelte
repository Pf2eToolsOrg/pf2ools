<script>
	import Fa from "svelte-fa";
	import { faClose } from "@fortawesome/free-solid-svg-icons";
	export let dataPopup = "";
	export let windowed;
</script>

<div class="shadow-xl max-w-lg card z-10" data-popup={dataPopup} tabindex="-1">
	{#if $windowed}
		<div class="flex justify-end">
			<button class={"close-" + dataPopup}>
				<Fa icon={faClose} />
			</button>
		</div>
	{/if}
	<slot />
</div>
