<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { derived } from 'svelte/store';
	import { default as JSON } from './pages.json';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	export let pages = JSON;

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

<div class="flex flex-col flex-wrap whitespace-normal">
	<TabGroup padding="p-1 pr-2" hover="hover:variant-soft-primary" rounded="" border="" active="">
		{#each pages as link}
			{#if !(link.offline || link.type === 'divider')}
				{#if link.pages}
					<Tab
						name={link.label}
						value={link}
						class={selected(link) ? 'variant-filled-primary' : ''}
						bind:group={tab}
					>
						<div class="flex flex-row">
							<Fa icon={fort[pickRandom(link.icon)]} class="m-1" />
							{link.label}
						</div>
					</Tab>
				{:else}
					<Tab
						name={link.label}
						value={link}
						class={selected(link) ? 'variant-filled-primary' : ''}
						bind:group={tab}
					>
						<a class="flex flex-row" href={link.href}>
							<Fa icon={fort[pickRandom(link.icon)]} class="m-1" />
							{link.label}
						</a>
					</Tab>
				{/if}
			{/if}
		{/each}
	</TabGroup>

	{#if tab.pages}
		<div class="absolute mt-8 variant-ghost-primary">
			<TabGroup
				padding="p-1 pr-2"
				hover="hover:variant-soft-primary"
				flex="flex flex-col"
				rounded=""
				border=""
				active=""
			>
				{#each tab.pages as link}
					{#if !(link.offline || link.type === 'divider')}
						<Tab
							name={link.label}
							value={link}
							class={selected(link) ? 'variant-filled-primary' : ''}
						>
							<a class="flex flex-row" href={link.href}>
								<Fa icon={fort[pickRandom(link.icon)]} class="m-1" />
								{link.label}
							</a>
						</Tab>
					{/if}
				{/each}
			</TabGroup>
		</div>
	{/if}
</div>
