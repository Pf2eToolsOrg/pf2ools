<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import NavigationOption from './NavigationOption.svelte';
	import pages from './pages.json';

	// Dropdowns: https://flowbite.com/docs/components/dropdowns/#multi-level-dropdown
</script>

<nav class="hidden md:flex">
	<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
		{#each pages as page}
			<li class="mr-0.5">
				<NavigationOption
					link={page}
					classes={'unstyled px-4 py-2 rounded-lg variant-ghost-surface flex items-center justify-center h-8'}
				/>
			</li>
		{/each}
	</ul>
</nav>
