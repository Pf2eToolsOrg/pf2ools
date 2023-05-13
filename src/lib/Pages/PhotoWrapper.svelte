<script>
	import domtoimage from 'dom-to-image';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import Toasts from '$lib/Utils/Toasts.js';
	import { localStorageStore } from '@skeletonlabs/skeleton';

	export let entries;
	let toast = new Toasts();

	function options(entry) {
		let scale = 2;
		return {
			width: entry.clientWidth * scale,
			height: entry.clientHeight * scale,
			style: {
				transform: `scale(${scale})`,
				transformOrigin: 'top left'
			}
		};
	}

	function copy() {
		const entry = document.querySelector('.wrp-stats');

		domtoimage
			.toBlob(entry, options)
			.then((dataUrl) => {
				navigator.clipboard.write([
					new ClipboardItem({
						'image/png': dataUrl
					})
				]);
				toast.success('Copied to Clipboard');
			})
			.catch((err) => {
				console.error('Failed to take screenshot', err);
			});
	}

	function save() {
		const entry = document.querySelector('.wrp-stats');

		domtoimage
			.toPng(entry, options)
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'screenshot.png';
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.error('Failed to take screenshot', err);
			});
	}

	let aspect = localStorageStore('');
</script>

<div class="relative scale-75 sm:scale-100">
	<div class="flex">
		<div class="btn-group variant-ghost-surface m-auto">
			<button on:click={save}>Save</button>
			<button on:click={copy}>Copy</button>
		</div>
	</div>
	<div class="flex">
		<div class="btn-group-vertical variant-ghost-surface">
			<div class="p-2 whitespace-nowrap text-ellipsis">Aspect Ratio:</div>
			<button class:variant-ghost-secondary={$aspect === ''} on:click={() => ($aspect = '')}>
				None
			</button>
			<button
				class:variant-ghost-secondary={$aspect === 'aspect-square'}
				on:click={() => ($aspect = 'aspect-square')}
			>
				1:1
			</button>
			<button
				class:variant-ghost-secondary={$aspect === 'aspect-[2/1]'}
				on:click={() => ($aspect = 'aspect-[2/1]')}
			>
				2:1
			</button>
			<button
				class:variant-ghost-secondary={$aspect === 'aspect-[3/4]'}
				on:click={() => ($aspect = 'aspect-[3/4]')}
			>
				3:4
			</button>
			<button
				class:variant-ghost-secondary={$aspect === 'aspect-[4/7]'}
				on:click={() => ($aspect = 'aspect-[4/7]')}
			>
				4:7
			</button>
			<button
				class:variant-ghost-secondary={$aspect === 'aspect-[7/8]'}
				on:click={() => ($aspect = 'aspect-[7/8]')}
			>
				7:8
			</button>
			<button
				class:variant-ghost-secondary={$aspect === 'aspect-video'}
				on:click={() => ($aspect = 'aspect-video')}
			>
				16:9
			</button>
		</div>
		<div class="pf2ools">
			<div
				class="wrp-stats stats !overflow-hidden resize-x w-96 {$aspect} max-h-screen max-w-screen"
			>
				<div class="m-1.5">
					<Renderer {entries} />
				</div>
			</div>
		</div>
	</div>
</div>
