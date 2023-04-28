<script>
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import Renderer from '../../lib/Renderer/Renderer.svelte';
	export let data;
	const renderdemo = data.renderdemo;
	const store = localStorageStore('renderdemo', renderdemo);
</script>

<svelte:head>
	<title>PF2ools - Renderer Demo</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-8 pf2ools flex">
	<div class="container" />
	<div class="container"><Renderer entries={$store} /></div>
</div>
