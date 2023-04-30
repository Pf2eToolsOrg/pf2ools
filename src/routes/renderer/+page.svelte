<script>
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import CodeMirror from 'svelte-codemirror-editor';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { EditorView } from 'codemirror';
	export let data;
	const renderdemo = data.renderdemo;
	import { json } from '@codemirror/lang-json';

	const store = localStorageStore('renderdemo', JSON.stringify(renderdemo[0], null, 2));

	let rendered = renderdemo;

	function checkAndUpdateJson(value) {
		try {
			JSON.parse(value);
		} catch (e) {
			return;
		}
		rendered = [JSON.parse(value)];
	}

	$: checkAndUpdateJson($store);
</script>

<svelte:head>
	<title>PF2ools - Renderer Demo</title>
</svelte:head>

<!-- FIXME: This is hell to center and widen properly -->
<div class="pf2ools md:flex">
	<div class=" p-2">
		<CodeMirror
			bind:value={$store}
			lang={json()}
			theme={oneDark}
			styles={{
				'&': {
					height: '90vh',
					width: '100vh'
				}
			}}
			extensions={[EditorView.lineWrapping]}
		/>
	</div>
	<div class="render p-2"><Renderer entries={rendered} /></div>
</div>

<style>
	.render {
		overflow-y: scroll;
		max-height: 90.8vh;
	}
</style>
