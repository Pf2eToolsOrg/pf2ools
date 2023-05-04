<script>
	import FilterBar from './FilterBar.svelte';
	export let data = [];
</script>

<div class="view-col" id="listcontainer">
	<FilterBar />
	<ul class="view-row">
		{#each data as element}
			<li>
				{element}
			</li>
		{/each}
	</ul>
</div>
