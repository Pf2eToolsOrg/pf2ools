<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { default as JSON } from './pages.json';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	export let pages = JSON;

	import { popup } from '@skeletonlabs/skeleton';

	// Dropdowns: https://flowbite.com/docs/components/dropdowns/#multi-level-dropdown

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}

	let currentPage = $page.url.pathname;
	let selected;
	let tab = {};

	$: selected = (link) =>
		currentPage === link.href || link?.pages?.find((page) => currentPage === page.href);

	page.subscribe((value) => {
		currentPage = value.url.pathname;
		tab = {};
	});
</script>

<div class="flex flex-row flex-wrap whitespace-normal">
	{#each pages as link}
		{#if !(link.offline || link.type === 'divider')}
			{#if link.pages}
				<button
					class="flex btn btn-sm hover:variant-soft-primary {selected(link)
						? 'variant-filled-primary'
						: ''}"
					use:popup={{
						event: 'click',
						target: 'dropdown-' + link.label,
						placement: 'bottom-start'
					}}
					on:click={() => (tab = link)}
					id="navbtn"
				>
					<Fa icon={fort[pickRandom(link.icon)]} class="mr-1" />
					{link.label}
				</button>
				<div class="absolute card shadow-md" data-popup="dropdown-{link.label}">
					<div class="flex flex-col backdrop-blur-md p-1 rounded-md">
						{#each link.pages as sublink}
							{#if !(sublink.offline || sublink.type === 'divider')}
								<div
									name={sublink.label}
									value={sublink}
									class="rounded-md hover:variant-soft-primary p-1 {selected(
										sublink
									)
										? 'variant-filled-primary selected-sub'
										: ''}"
									id="dropdown"
								>
									<a class="flex" href={sublink.href}>
										<Fa icon={fort[pickRandom(sublink.icon)]} class="m-1" />
										{sublink.label}
									</a>
								</div>
							{/if}
						{/each}
					</div>
					<div class="arrow bg-surface-300 dark:bg-surface-500" />
				</div>
			{:else}
				<a
					class="flex btn btn-sm hover:variant-soft-primary {selected(link)
						? 'variant-filled-primary'
						: ''}"
					href={link.href}
				>
					<Fa icon={fort[pickRandom(link.icon)]} class="mr-1" />
					{link.label}
				</a>
			{/if}
		{/if}
	{/each}
</div>
