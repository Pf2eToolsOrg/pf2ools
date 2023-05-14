<script>
	import domtoimage from 'dom-to-image';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import PhotoWrapper from './PhotoWrapper.svelte';
	import Fa from 'svelte-fa';
	import { faCamera, faCode } from '@fortawesome/free-solid-svg-icons';
	import Toasts from '$lib/Utils/Toasts.js';
	export let selected;

	let toast = new Toasts();
	let tabSet = writable('data');
</script>

<TabGroup regionPanel="!mt-0 pf2ools" active="border-primary-500 border-b-4 mt-[-4px]">
	<Tab bind:group={$tabSet} value={'data'} padding="px-2 select-none">Stats</Tab>
	{#if selected?.fluff?.length}
		<Tab bind:group={$tabSet} value={'fluff'} padding="px-2 select-none">Fluff</Tab>
	{/if}

	{#if selected?.images?.length}
		<Tab bind:group={$tabSet} value={'images'} padding="px-2 select-none">Images</Tab>
	{/if}

	<!-- Tabs To the Right -->
	<div class="ml-auto">
		<button
			id="screenshot"
			class="btn btn-sm p-1 variant-ghost-surface rounded-b-none"
			title="Screenshot the Current Tab (+ Ctrl to Copy to Clipboard, + Shift to Download)"
			on:click={(e) => {
				const entry = document.querySelector('.wrp-stats');

				if (e.ctrlKey || e.shiftKey) {
					(e.ctrlKey ? domtoimage.toBlob(entry) : domtoimage.toPng(entry))
						.then((dataUrl) => {
							if (e.shiftKey) {
								const link = document.createElement('a');
								link.download = 'screenshot.png';
								link.href = dataUrl;
								link.click();
							} else if (e.ctrlKey) {
								navigator.clipboard.write([
									new ClipboardItem({
										'image/png': dataUrl
									})
								]);
								toast.success('Copied to Clipboard');
							}
						})
						.catch((err) => {
							console.error('Failed to take screenshot', err);
						});
				} else {
					modalStore.trigger({
						type: 'component',
						component: {
							ref: PhotoWrapper,
							props: {
								entries: $tabSet === 'data' ? selected : selected[$tabSet]
							}
						}
					});
				}
			}}
		>
			<Fa icon={faCamera} />
		</button>
		<button
			id="code"
			class="btn btn-sm m-0 p-1 variant-ghost-surface rounded-b-none"
			title="Show JSON Data"
			on:click={(e) => {
				console.log(selected);
				toast.success('Pasted to Console');
			}}
		>
			<Fa icon={faCode} />
		</button>
	</div>
	<!-- Selected Panel --->
	<svelte:fragment slot="panel">
		<div class="wrp-stats stats">
			<div class="m-1.5">
				{#key selected}
					<Renderer entries={$tabSet === 'data' ? selected : selected[$tabSet]} />
				{/key}
			</div>
		</div>
	</svelte:fragment>
</TabGroup>
