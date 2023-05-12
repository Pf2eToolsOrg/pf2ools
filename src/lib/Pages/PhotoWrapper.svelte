<script>
	import domtoimage from 'dom-to-image';
	import Renderer from '$lib/Renderer/Renderer.svelte';
	import Toasts from '$lib/Utils/Toasts.js';

	export let entries;
	let toast = new Toasts();

	function copy() {
		const entry = document.querySelector('.wrp-stats');

		domtoimage
			.toBlob(entry, { style: { resize: 'none' } })
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
			.toPng(entry, { style: { resize: 'none' } })
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
</script>

<div class="relative">
	<div class="flex">
		<button class="btn variant-ghost-surface" on:click={save}>Save</button>
		<button class="btn variant-ghost-surface" on:click={copy}>Copy</button>
	</div>
	<div class="pf2ools">
		<div class="wrp-stats stats !overflow-hidden resize w-96 min-h-min min-w-min">
			<div class="m-1.5">
				<Renderer {entries} />
			</div>
		</div>
	</div>
</div>
