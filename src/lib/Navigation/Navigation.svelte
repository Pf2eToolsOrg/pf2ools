<script>
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';

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
			label: 'About',
			href: '/about',
			icon: 'about'
		}
	];
</script>

<nav class="list-nav p-2">
	<ul>
		{#each pages as link}
			<li>
				<a
					on:click={drawerClose}
					class:!variant-ghost-surface={link.href === $page.url.pathname}
					href={link.href}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
