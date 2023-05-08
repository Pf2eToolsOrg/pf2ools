<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import NavigationOption from './NavigationOption.svelte';
	import pages from './pages.json';
	import { popup } from '@skeletonlabs/skeleton';

	// Dropdowns: https://flowbite.com/docs/components/dropdowns/#multi-level-dropdown

	let popupCombobox = {
		event: 'hover-click',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}
</script>

<nav class="hidden md:flex">
	<div class="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400 flex-nowrap">
		{#each pages as link}
			{#if link.type === 'divider'}
				<hr />
			{:else if link.pages}
				<!-- svelte-ignore missing-declaration -->
				<button
					class="unstyled px-4 py-2 rounded-lg
					text-gray-900 dark:text-gray-400
					variant-ghost-surface flex items-center
					justify-center h-8 mr-0.5 whitespace-nowrap"
					use:popup={{ ...popupCombobox, target: link.label }}
				>
					<span class="pr-2">
						{#if fort[pickRandom(link.icon)]}
							<Fa icon={fort[pickRandom(link.icon)]} />
						{:else}
							{@html link.icon}
						{/if}
					</span>
					{link.label}
				</button>
				<div
					class="bg-surface-300/95 dark:bg-surface-800/95 rounded-lg min-w-20
					text-gray-900 dark:text-gray-400"
					data-popup={link.label}
				>
					{#each link.pages as sublink}
						<NavigationOption
							link={sublink}
							classes={{
								anchor:
									'unstyled px-4 py-2 rounded-lg variant-ghost-surface flex items-centerjustify-center h-8',
								icon: 'pr-2'
							}}
						/>
					{/each}
				</div>
			{:else}
				<div class="mr-0.5">
					<NavigationOption
						{link}
						classes={{
							anchor:
								'unstyled px-4 py-2 rounded-lg variant-ghost-surface flex text-gray-900 dark:text-gray-400 items-center justify-center h-8 ',
							icon: 'pr-2'
						}}
					/>
				</div>
			{/if}
		{/each}
	</div>
</nav>
