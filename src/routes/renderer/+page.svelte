<script>
	import { renderdemo } from "$data/renderdemo.json";
	import Renderer from "$lib/Renderer/Renderer.svelte";
	import { json } from "@codemirror/lang-json";
	import { oneDark } from "@codemirror/theme-one-dark";
	import Fa from "svelte-fa";
	import { faItalic, faRefresh } from "@fortawesome/free-solid-svg-icons";
	import { localStorageStore, modeCurrent } from "@skeletonlabs/skeleton";
	import { EditorView } from "codemirror";
	import CodeMirror from "svelte-codemirror-editor";
	import { pf2oolsPlugin } from "./pf2ools-codemirror.js";

	const store = localStorageStore("renderdemo", JSON.stringify(renderdemo[0], null, 2));

	let rendered = renderdemo;

	function checkAndUpdateJson(value) {
		try {
			JSON.parse(value);
		} catch (event) {
			return;
		}
		rendered = [JSON.parse(value)];
	}

	function refreshCode() {
		$store = JSON.stringify(renderdemo[0], null, "\t");
	}

	function format() {
		$store = JSON.stringify(JSON.parse($store), null, "\t");
	}

	$: checkAndUpdateJson($store);
</script>

<svelte:head>
	<title>Renderer Demo - PF2ools</title>
</svelte:head>

<div class="pf2ools md:flex pt-1">
	<div class="mx-0.5 md:w-2/4 relative">
		<div class="bg-surface-50 text-xs">
			<CodeMirror
				bind:value={$store}
				lang={json()}
				theme={$modeCurrent ? null : oneDark}
				extensions={[EditorView.lineWrapping, pf2oolsPlugin]}
				styles={{
					"&": {
						height: "90vh",
						maxHeight: "90vh",
					},
				}}
			/>
		</div>
		<div class="float-right absolute top-3 right-5">
			<button type="button" class="px-2 pb-2 btn variant-ghost-surface" on:click={refreshCode}>
				<span><Fa icon={faRefresh} /></span>
				<span>Reset</span>
			</button>
			<button type="button" class="px-2 pb-2 btn variant-ghost-surface" on:click={format}>
				<span><Fa icon={faItalic} /></span>
				<span>Format</span>
			</button>
		</div>
	</div>
	<div
		class="mx-0.5 md:w-2/4 font-sabonltstd variant-ghost-surface px-2 pt-2 h-[90vh] overflow-hidden overflow-y-auto"
	>
		<Renderer entries={rendered} />
	</div>
</div>

<style>
	:global(.renderTag span) {
		color: purple;
	}
	:global(.renderTag-wrong span) {
		color: white;
		background-color: darkred;
	}
	:global(html.dark .renderTag-wrong span) {
		color: white;
		background-color: red;
	}
	:global(html.dark .renderTag span) {
		color: pink;
	}
</style>
