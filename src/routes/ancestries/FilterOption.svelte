<script>
	export let classes;
	export let item;
	export let selected;
</script>

<div class="text-sm bg-[#cbcbcb] dark:bg-[#222]">
	<div class:selected={selected.hash.includes(item.hash)}>
		<a href={'#' + item.hash} class="unstyled">
			<div class="flex row">
				<button
					class={classes['btn']}
					id="btn"
					on:click|stopPropagation={() => {
						item.hidden = !item.hidden;
					}}
					on:keydown|stopPropagation={() => {
						item.hidden = !item.hidden;
					}}
				>
					[{item.hidden ? '+' : '\u2013'}]
				</button>
				<div class={classes['name']} id="name">{item.name}</div>
				<div class={classes['hp']} id="hp">{item.hp}</div>
				<div class={classes['boosts']} id="boosts">
					{item.boosts
						.toTitleCase()
						.map((x) => (x === 'Free' ? x : x.substring(0, 3)))
						.joinConjunct(', ', ' and ')}
				</div>
				<div class={classes['flaws']} id="flaws">
					{item.flaws
						? item.flaws
								.toTitleCase()
								.map((x) => x.substring(0, 3))
								.joinConjunct(', ', ' and ')
						: '\u2014'}
				</div>
				<div class={classes['size']} id="size">
					{item.size
						.map((x) => x[0])
						.join('/')
						.toUpperCase()}
				</div>
				<div class={classes['source']} id="source">{item.source}</div>
			</div>
		</a>
	</div>
	<div class:hidden={item.hidden}>
		{#each item.heritages.toValueArray() as heritage}
			<a href={'#' + heritage.hash} class="unstyled">
				<div class="pl-7 flex row" class:selected={selected.hash.includes(heritage.hash)}>
					<div class={classes['btn']} id="btn" />
					<div class="-ml-3 basis-full" id="name">{heritage.name}</div>
					<div class="pl-0.5 {classes['source']}" id="source">{heritage.source}</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.row {
		border-bottom: 1px solid #ddd;
		border-color: #416482;
	}

	.row:hover {
		background-color: #d3d3d3;
		color: #000;
	}

	:global(html.dark) .row:hover {
		background-color: #333;
		color: #fff;
	}

	.selected {
		box-shadow: inset 0 0 0 200px rgba(0, 107, 196, 0.3);
	}
</style>
