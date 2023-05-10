<script>
	export let href;
	console.log('Opened Hover.svelte');
</script>

<div class="wrp-stats stats" data-popup={href}>
	<!-- TODO: Tabs, Buttons, etc, make it a slot -->
	<div class="m-2">
		<slot />
	</div>
</div>
