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

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}
</script>

<nav class="list-nav p-1">
	{#each pages as link}
		<div class="py-1">
			{#if link.type === 'divider'}
				<hr />
			{:else if link.pages}
				<Accordion regionPanel="space-y-1" on:keydown={(e) => console.log(e)}>
					<AccordionItem open={link.pages.find((x) => x.href === $page.url.pathname)}>
						<svelte:fragment slot="lead">
							{#if fort[pickRandom(link.icon)]}
								<Fa icon={fort[pickRandom(link.icon)]} />
							{:else}
								{@html link.icon}
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="summary">
							{link.label}
						</svelte:fragment>
						<svelte:fragment slot="content">
							{#each link.pages as sublink}
								<NavigationOption link={sublink} openFunction={drawerClose} />
							{/each}
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			{:else}
				<NavigationOption {link} openFunction={drawerClose} />
			{/if}
		</div>
	{/each}
</nav>
