<script>
	export let data;
	export let selected;

	// TODO: https://shortbuzz.in/blog/shortbuzz.in/how-to-create-tailwind-css-grid-system-like-the-bootstrap-grid-system
</script>

<div class="overflow-x-hidden">
	<div class="flex h-8">
		<button class="btn variant-ghost-surface rounded-tl-md rounded-none px-2">Filters</button>
		<input
			class="w-[100%] rounded-t-md variant-ghost-surface border-none rounded-tl-none"
			type="search"
		/>
	</div>

	<div class="row header px-1">
		<slot name="header" />
	</div>

	<div class="h-[84vh] overflow-y-scroll mr-[-9px]">
		{#each data.toValueArray() as item}
			<div
				class="row
				text-sm
				px-1
				leading-5
				bg-[#cbcbcb]
				hover:bg-[#d3d3d3]
				dark:bg-[#222]
				dark:hover:bg-[#333]
				"
				class:selected={item?.hash === selected?.hash}
			>
				<a href={'#' + item.hash} class="unstyled">
					<slot name="list" {item} />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.row {
		border-bottom: 1px solid #ddd;
		border-color: #416482;
	}

	.header {
		border-bottom-right-radius: 0.375rem;
		border-bottom-left-radius: 0.375rem;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		border-color: #416482;
	}

	.selected {
		background-color: #416482;
		color: #fff;
	}

	:global(html.dark) .selected {
		box-shadow: inset 0 0 0 200px rgba(0, 107, 196, 0.3);
	}
</style>
