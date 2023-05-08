<script>
	import Renderer from '$lib/Renderer/Renderer.svelte';
	export let selected;
</script>

<div class="wrp-stats">
	<!-- TODO: Tabs, Buttons, etc, make it a slot -->
	<div class="stats">
		<Renderer entries={selected} />
	</div>
</div>
