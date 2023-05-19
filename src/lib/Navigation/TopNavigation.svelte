<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { default as JSON } from './pages.json';
	import { popup } from '@skeletonlabs/skeleton';
	export let pages = JSON;

	// Dropdowns: https://flowbite.com/docs/components/dropdowns/#multi-level-dropdown

	let popupCombobox = {
		event: 'click',
		placement: 'bottom',
		closeQuery: '#navigation-option'
	};

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}
</script>

{#each pages as link}
	{#if !link.offline}
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
				<div class="flex flex-col">
					<svelte:self pages={link.pages} />
				</div>
			</div>
		{:else}
			<div class="mr-0.5">
				<a
					id="navigation-option"
					class="unstyled px-4 py-2 rounded-lg variant-ghost-surface flex text-gray-900 dark:text-gray-400 items-center justify-center h-8"
					class:!variant-ghost-surface={link.href === $page.url.pathname}
					href={link.href}
				>
					<span class="pr-2">
						{#if fort[pickRandom(link.icon)]}
							<Fa icon={fort[pickRandom(link.icon)]} />
						{:else}
							{@html link.icon}
						{/if}
					</span>
					<span>{link.label}</span>
				</a>
			</div>
		{/if}
	{/if}
{/each}
