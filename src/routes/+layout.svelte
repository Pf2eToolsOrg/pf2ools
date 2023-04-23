<script>
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Search from '$lib/Navigation/Search.svelte';
	import { AppBar, AppShell, Drawer, LightSwitch, drawerStore } from '@skeletonlabs/skeleton';

	function drawerOpen() {
		drawerStore.open({});
	}
</script>

<!-- Mobile Sidebar -->
<Drawer>
	<div class="search drawer">
		<Search />
	</div>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-48">
	<!-- Desktop Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 md:hidden" on:click={drawerOpen}>
						<img src="/icons/NoBackground.svg" alt="PF2ools" class="h-8 icon" />
					</button>
					<div class="hidden md:contents">
						<img src="/icons/NoBackground.svg" alt="PF2ools" class="h-8 icon" />
						<strong class="text-xl ml-1">PF2ools</strong>
					</div>
				</div>
			</svelte:fragment>

			<div class="search hidden md:flex">
				<Search />
			</div>

			<!-- Trailing Buttons (Dark Mode, Discord, GitHub, etc.) -->
			<svelte:fragment slot="trail">
				<div class="noselect">
					<LightSwitch />
				</div>
				<div class="hidden md:contents">
					<a
						class="btn btn-sm ml-2 variant-ghost-surface noselect"
						href="https://discord.gg/2hzNxErtVu"
						target="_blank"
						rel="noreferrer"
					>
						Discord
					</a>
					<a
						class="btn btn-sm ml-2 variant-ghost-surface noselect"
						href="https://github.com/Pf2eToolsOrg/pf2ools"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	.search {
		margin: auto;
		width: 50%;
	}

	.search.drawer {
		margin: 0.5rem;
		width: auto;
	}

	.icon {
		transform: scale(2);
		width: 4rem;
		min-width: 4rem;
		margin: 0 1em 0 0;
		filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4));
	}
	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
	}
</style>
