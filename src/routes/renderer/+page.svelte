<script>
	import { renderdemo } from '$data/renderdemo.json';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import { json } from '@codemirror/lang-json';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons';
	import { localStorageStore, modeUserPrefers } from '@skeletonlabs/skeleton';
	import { EditorView } from 'codemirror';
	import CodeMirror from 'svelte-codemirror-editor';
	import Fa from 'svelte-fa';

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

	function refreshCode() {
		$store = JSON.stringify(renderdemo[0], null, 2);
	}

	$: checkAndUpdateJson($store);
</script>

<svelte:head>
	<title>PF2ools - Renderer Demo</title>
</svelte:head>

<div class="pf2ools md:flex flex-row">
	<div class="md:w-2/4 relative">
		<div class="view-col variant-ghost-surface">
			<CodeMirror
				bind:value={$store}
				lang={json()}
				theme={$modeUserPrefers ? null : oneDark}
				extensions={[EditorView.lineWrapping]}
			/>
		</div>
		<button
			type="button"
			class="mx-2 mb-2 btn variant-ghost-surface float-right absolute top-3 right-3"
			on:click={refreshCode}
		>
			<span><Fa icon={faRefresh} /></span>
			<span>Reset</span>
		</button>
	</div>
	<div class="render md:w-2/4 view-col font-sabonltstd variant-ghost-surface px-2">
		<Renderer entries={rendered} />
	</div>
</div>

<style>
	.view-col {
		position: relative;
		margin: 0.5em;
		display: flex;
		flex-direction: column;
		height: calc(100% - 19px);
		max-height: 90vh;
		overflow: auto;
	}

	.render {
		max-height: 90vh;
	}
</style>
