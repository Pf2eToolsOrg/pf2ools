<script>
	import { hotkey } from 'svelte-gh-hotkey';
	import { goto } from '$app/navigation';
	export let data;
	export let field;
	export let selected;

	let search = '';

	$: regex = search ? new RegExp(search, 'i') : null;
	$: matches = (item) => (regex ? regex.test(item[field]) : true);

	function cycleSelected(arg) {
		// FIXME: There's something wrong here. Select an option, use one of the keys, then the other. The other will not happen.
		let index = [...data.values()].indexOf(selected);
		let next = [...data.values()][
			index === 0 && arg === -1 ? data.size - 1 : (index + arg) % data.size
		];
		goto('#' + next.hash);
	}

	// TODO: https://shortbuzz.in/blog/shortbuzz.in/how-to-create-tailwind-css-grid-system-like-the-bootstrap-grid-system
</script>

<button
	class="hidden"
	on:click={(e) => {
		cycleSelected(-1);
	}}
	use:hotkey={'k'}
/>
<button
	class="hidden"
	on:click={(e) => {
		cycleSelected(1);
	}}
	use:hotkey={'j'}
/>

<div class="overflow-x-hidden">
	<div class="flex h-8">
		<button class="btn variant-ghost-surface rounded-tl-md rounded-none px-2">Filters</button>
		<input
			bind:value={search}
			class="w-[100%] rounded-t-md variant-ghost-surface border-none rounded-tl-none"
			type="search"
		/>
	</div>

	{#if $$slots.header}
		<div class=" header px-1 border-b-[1px]">
			<slot name="header" />
		</div>
	{/if}

	<div class="h-[84vh] overflow-y-scroll mr-[-9px]">
		{#each data
			.filter(matches)
			.toValueArray()
			.map((x) => {
				x.hidden = true;
				return x;
			}) as item}
			<slot name="list" {item} />
		{/each}
	</div>
</div>

<style>
	.header {
		border-bottom-right-radius: 0.375rem;
		border-bottom-left-radius: 0.375rem;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		border-color: #416482;
	}
</style>
