<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { default as JSON } from './pages.js';
	export let pages = JSON;
	export let rowOrCol = 'row';

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

	$: selected = (link) =>
		currentPage === link.href || link?.pages?.find((page) => currentPage === page.href);

	page.subscribe((value) => {
		currentPage = value.url.pathname;
	});
</script>

<div class="flex flex-{rowOrCol} flex-wrap whitespace-normal">
	{#each pages as link}
		{#if !link.offline}
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
					id="navbtn"
				>
					<Fa icon={fort[pickRandom(link.icon)]} class="mr-1" />
					{link.label}
				</button>
				<div class="absolute card shadow-md" data-popup="dropdown-{link.label}">
					<div class="flex flex-col backdrop-blur-md p-1 rounded-md">
						<svelte:self pages={link.pages} rowOrCol="col" />
					</div>
					<div class="arrow bg-surface-300 dark:bg-surface-500" />
				</div>
			{:else if link.func}
				<button class="flex btn btn-sm hover:variant-soft-primary" on:click={link.func}>
					<Fa icon={fort[pickRandom(link.icon)]} class="mr-1" />
					{link.label}
				</button>
			{:else if link.type === 'divider'}
				<hr />
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
