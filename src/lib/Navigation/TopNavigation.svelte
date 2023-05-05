<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import { Accordion, AccordionItem, drawerStore } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import NavigationOption from './NavigationOption.svelte';
	import pages from './pages.json';

	function drawerClose() {
		drawerStore.close();
	}

	// Dropdowns: https://flowbite.com/docs/components/dropdowns/#multi-level-dropdown
</script>

<nav>
	<div class="flex flex-wrap items-center justify-between mx-auto">
		<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
			{#each pages as page}
				<li class="mr-2">
					<a href={page.href} class="inline-block px-4 py-2 rounded-lg variant-ghost-surface">
						{page.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
