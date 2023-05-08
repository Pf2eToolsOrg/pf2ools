<script>
	import Renderer from '$lib/Renderer/Renderer.svelte';
	export let selected;
</script>

<div class="wrp-stats stats">
	<!-- TODO: Tabs, Buttons, etc, make it a slot -->
	<div class="m-2">
		<Renderer entries={selected} />
	</div>
</div>
