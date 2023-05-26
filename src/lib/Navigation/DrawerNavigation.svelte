<script>
	import { page } from '$app/stores';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import { Accordion, AccordionItem, drawerStore } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import { default as JSON } from './pages.js';
	export let pages = JSON;

	function drawerClose() {
		drawerStore.close();
	}

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}
</script>

<!-- Each Link -->
{#each pages as link}
	<!-- Don't Show if Offline -->
	{#if !link.offline}
		{#if link.type === 'divider'}
			<hr />
		{:else if link.pages}
			<!-- Actual Good Stuff -->
			<div class="py-1">
				<Accordion regionPanel="space-y-1">
					<AccordionItem open={link.pages.find((x) => x.href === $page.url.pathname)}>
						<!-- Lead Icon -->
						<svelte:fragment slot="lead">
							{#if fort[pickRandom(link.icon)]}
								<Fa icon={fort[pickRandom(link.icon)]} />
							{:else}
								{@html link.icon}
							{/if}
						</svelte:fragment>
						<!-- The Actual Text -->
						<svelte:fragment slot="summary">
							{link.label}
						</svelte:fragment>
						<!-- The Actual Content -->
						<svelte:fragment slot="content">
							<svelte:self pages={link.pages} />
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		{:else}
			<a
				id="navigation-option"
				on:click={drawerClose}
				class:!variant-ghost-surface={link.href === $page.url.pathname}
				href={link.href}
			>
				<span>
					{#if fort[pickRandom(link.icon)]}
						<Fa icon={fort[pickRandom(link.icon)]} />
					{:else}
						{@html link.icon}
					{/if}
				</span>
				<span>{link.label}</span>
			</a>
		{/if}
	{/if}
{/each}
