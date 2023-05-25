<script>
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';
	import { browser } from '$app/environment';
	import { Storage } from 'Storage';
	import { onMount } from 'svelte';

	let selected;
	onMount(async () => {
		selected = (await Storage.ancestries).firstValue();
	});
</script>

<div class="container">
	{#if browser}
		<div class="flex">
			<div class="m-2 w-2/5">
				<DisplayBox {selected} />
			</div>
			<div class="m-2 w-3/5">
				<DisplayBox {selected} />
			</div>
		</div>
	{/if}
</div>

<svelte:head>
	<title>PF2ools</title>
</svelte:head>
