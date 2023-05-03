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
</script>

<nav class="list-nav p-1">
	{#each pages as link}
		{#if link.pages}
			<Accordion regionPanel="space-y-1" on:keydown={(e) => console.log(e)}>
				<AccordionItem open={link.pages.find((x) => x.href === $page.url.pathname)}>
					<svelte:fragment slot="lead">
						<Fa icon={fort[link.icon]} />
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
	{/each}
</nav>
