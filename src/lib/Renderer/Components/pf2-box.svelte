<script>
	import Tagger from '../Tagger.svelte';
	import Renderer from '../Renderer.svelte';
	export let entry;
</script>

<div class="flex">
	<div class="box {entry.style}">
		{#if entry.name}
			<span class="title"><Tagger entry={entry.name} /></span>
		{/if}
		{#if entry?.entries?.length > 0}
			<div>
				<Renderer entries={entry.entries} />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.box {
		position: relative;
		left: 3%;
		margin: 1.6em 0 0.6em;
		padding: 0.6em 1.6em;
		font-family: 'good-pro', sans-serif;
		width: 94%;
		min-width: 120px;
		border-radius: 2px;
		font-size: 1em;
		border-radius: 6px;

		&.red {
			background-color: #5e0000;
			fill: #5e0000;
			color: #fff;

			:global(html.dark) & {
				background-color: #472c2c;
				fill: #472c2c;
				color: #c9c9c9;
			}
		}

		& .title {
			position: relative;
			z-index: 2;
			left: 0;
			padding: 0 0.3em;
			display: block;
			font-weight: bold;
			font-size: 1.22em;
			text-transform: uppercase;
			text-align: center;
		}

		&.brown,
		&.beige,
		&.sample {
			fill: #2e2c27;
			background: #2e2c27;
			color: #c9c9c9;
		}
	}
</style>
