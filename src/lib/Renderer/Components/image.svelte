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

<!-- aonprd -->
{#if entry.href.path.includes('aonprd')}
	<div class="flex">
		<img src="images/AoN.webp" alt={entry.altText} class="w-24 h-24 p-1" />
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
			{#if entry.title}<p class="text-center underline underline-offset-2 pt-3">
					{entry.title}
				</p>{/if}
		</i>
	</div>
{:else}
	<div>
		<a href={entry.href.path} target="_blank">
			<img src={entry.href.path} alt={entry.altText} />
		</a>
		{#if entry.title}<p class="text-center underline underline-offset-2">{entry.title}</p>{/if}
	</div>
{/if}
