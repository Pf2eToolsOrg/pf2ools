<script>
	export let entry;

	const preload = async (src) => {
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise(function (resolve) {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject('Error: ', error);
		});
	};
</script>

{#if entry.href.path.includes('aonprd')}
	<div class="flex">
		<img src="images/AoN.webp" alt={entry.alt} class="w-24 h-24 p-1" />
		<i class="p-1">
			You can see the
			<a href={entry.href.path} class="unstyled" target="_blank"> image </a>
			over at
			<a
				href={entry.href.fallback ?? 'https://2e.aonprd.com/'}
				class="unstyled"
				target="_blank"
			>
				Archives of Nethys</a
			>.
		</i>
	</div>
{:else}
	<div>
		{#await preload('https://picsum.photos/200/200')}
			Image is loading!
		{:then base64}
			<img src={base64} alt={entry.alt} />
		{/await}
	</div>
{/if}
