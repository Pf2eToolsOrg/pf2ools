<script>
	import html2canvas from 'html2canvas';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import Fa from 'svelte-fa';
	import { faCamera } from '@fortawesome/free-solid-svg-icons';
	export let selected;

	let tabSet = writable(0);
</script>

<TabGroup regionPanel="!mt-0">
	<Tab bind:group={$tabSet} name="tab1" value={0} padding="px-2">Stats</Tab>
	{#if selected?.fluff?.length}
		<Tab bind:group={$tabSet} name="tab1" value={1} padding="px-2">Fluff</Tab>
	{/if}

	<!-- Tabs To the Right -->
	<div class="ml-auto">
		<button
			id="screenshot"
			class="btn btn-sm p-1 variant-ghost-surface rounded-b-none"
			title="Screenshot the Current Tab (Shift + Click to Download)"
			on:click={(e) => {
				const entry = document.querySelector('.wrp-stats');

				html2canvas(entry).then((canvas) => {
					const image = canvas.toDataURL();
					if (!e.shiftKey) {
						modalStore.trigger({
							title: 'Screenshot',
							image
						});
					} else {
						const link = document.createElement('a');
						link.download = 'screenshot.png';
						link.href = image;
						link.click();
					}
				});
			}}
		>
			<Fa icon={faCamera} />
		</button>
	</div>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if $tabSet === 0}
			<div class="wrp-stats stats">
				<div class="m-1.5">
					<Renderer entries={selected} />
				</div>
			</div>
		{:else if $tabSet === 1}
			<div class="wrp-stats stats">
				<!-- TODO: Tabs, Buttons, etc, make it a slot -->
				<div class="m-1.5">
					<Renderer entries={selected.fluff} />
				</div>
			</div>
		{/if}
	</svelte:fragment>
</TabGroup>

<style>
	.stats {
		height: 100%;
	}
</style>
