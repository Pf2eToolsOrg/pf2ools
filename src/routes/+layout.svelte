<script>
	// The ordering of these imports is critical to your app working properly
	import '../app.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	// End critical imports
	import { AppRail, AppRailTile, AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

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

<AppShell slotSidebarLeft="bg-surface-500/5 p-3">
	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				{#each pages as link}
					<li>
						<a class:!variant-filled-primary={link.href === $page.url.pathname} href={link.href}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>

	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<img src="/icons/NoBackground.svg" alt="PF2ools" class="h-8 icon" />
				<strong class="text-xl">PF2ools</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/2hzNxErtVu"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/Pf2eToolsOrg/pf2ools"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	.icon {
		transform: scale(2);
		margin: 0 2em 0 1.3em;
	}
</style>
