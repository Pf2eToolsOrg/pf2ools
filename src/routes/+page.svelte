<script>
	import DisplayBox from '$lib/Pages/DisplayBox.svelte';
	import Renderer from 'renderer';
	import { browser } from '$app/environment';
	import { Storage } from 'Storage';
	import { onMount } from 'svelte';

	let selected;
	onMount(async () => {
		selected = (await Storage.ancestries).firstValue();
	});
</script>

<div class="container h-[90vh] flex">
	{#if browser}
		<Renderer entries={selected} />
	{/if}
</div>

<svelte:head>
	<title>PF2ools</title>
</svelte:head>
