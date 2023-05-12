<script>
	import domtoimage from 'dom-to-image';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import PhotoWrapper from './PhotoWrapper.svelte';
	import Fa from 'svelte-fa';
	import { faCamera } from '@fortawesome/free-solid-svg-icons';
	export let selected;
	import Toasts from '$lib/Utils/Toasts.js';

	let toast = new Toasts();
	let tabSet = writable('data');
</script>

<TabGroup regionPanel="!mt-0 pf2ools">
	<Tab bind:group={$tabSet} name="tab1" value={'data'} padding="px-2">Stats</Tab>
	{#if selected?.fluff?.length}
		<Tab bind:group={$tabSet} name="tab1" value={'fluff'} padding="px-2">Fluff</Tab>
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
	</div>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		<div class="wrp-stats stats">
			<div class="m-1.5">
				<Renderer entries={$tabSet === 'data' ? selected : selected[$tabSet]} />
			</div>
		</div>
	</svelte:fragment>
</TabGroup>
