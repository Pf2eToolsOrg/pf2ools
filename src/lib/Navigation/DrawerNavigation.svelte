<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import * as fort from '@fortawesome/free-solid-svg-icons';
	import { Accordion, AccordionItem, drawerStore } from '@skeletonlabs/skeleton';
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
	{#if link.type === 'divider'}
		<hr />
	{:else if link.pages}
		<!-- Actual Good Stuff -->
		<div class="py-1">
			<Accordion regionPanel="space-y-1" disabled={link.offline}>
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
	{:else if link.func}
		<button class="flex w-full" on:click={link.func} disabled={link.offline}>
			<span>
				{#if fort[pickRandom(link.icon)]}
					<Fa icon={fort[pickRandom(link.icon)]} />
				{:else}
					{@html link.icon}
				{/if}
			</span>
			<span>{link.label}</span>
		</button>
	{:else}
		<a
			on:click={drawerClose}
			class:!variant-ghost-surface={link.href === $page.url.pathname}
			href={link.href}
			class:disabled={link.offline}
			tabindex={link.offline ? '-1' : null}
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
{/each}
