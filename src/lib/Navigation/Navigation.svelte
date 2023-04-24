<script>
	import { page } from '$app/stores';
	import { Accordion, AccordionItem, drawerStore } from '@skeletonlabs/skeleton';
	import NavigationOption from './NavigationOption.svelte';

	function drawerClose() {
		drawerStore.close();
	}

	let pages = [
		{
			label: 'Home',
			href: '/',
			icon: 'home'
		},
		{
			label: 'Openable',
			icon: 'home',
			pages: [
				{
					label: 'Openable 1',
					href: '/openable/1',
					icon: 'home'
				},
				{
					label: 'Openable 2',
					href: '/openable/2',
					icon: 'home'
				},
				{
					label: 'Openable 3',
					href: '/openable/3',
					icon: 'home'
				}
			]
		},
		{
			label: 'Openable 2',
			icon: 'home',
			pages: [
				{
					label: 'Openable 4',
					href: '/openable/4',
					icon: 'home'
				},
				{
					label: 'Openable 5',
					href: '/openable/5',
					icon: 'home'
				},
				{
					label: 'Openable 6',
					href: '/openable/6',
					icon: 'home'
				}
			]
		},
		{
			label: 'Licenses',
			href: '/licenses',
			icon: 'fa-file-signature'
		}
	];
</script>

<nav class="list-nav p-2">
	<ul>
		{#each pages as link}
			{#if link.pages}
				<Accordion>
					<AccordionItem open={link.pages.find((x) => x.href === $page.url.pathname)}>
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
				<li>
					<NavigationOption {link} openFunction={drawerClose} />
				</li>
			{/if}
		{/each}
	</ul>
</nav>
