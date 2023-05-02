<script>
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Search from '$lib/Navigation/Search.svelte';
	import {
		AppBar,
		AppShell,
		Drawer,
		LightSwitch,
		Toast,
		drawerStore,
		localStorageStore
	} from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import '../css/index.scss';

	function drawerOpen() {
		drawerStore.open({});
	}

	function toggleSidebar() {
		$open = !$open;
	}

	let open = localStorageStore('openSidebar', true);
</script>

<!-- Toast -->
<Toast />

<!-- Mobile Sidebar -->
<Drawer duration="250">
	<div class="search drawer">
		<Search />
	</div>
	<hr />
	<Navigation />
</Drawer>

<!-- Where Everything Happens -->
<AppShell slotSidebarLeft="bg-surface-500/10">
	<!-- Desktop Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		{#if $open}
			<div class="w-0 md:w-64" transition:fly={{ x: -200, duration: 250 }}>
				<Navigation />
			</div>
		{/if}
	</svelte:fragment>

	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-300/75 dark:bg-surface-800/75">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 md:hidden" on:click={drawerOpen}>
						<img src="/icons/NoBackground.svg" alt="PF2ools" class="h-8 icon" />
					</button>
					<button class="btn btn-sm hidden md:contents" on:click={toggleSidebar}>
						<img src="/icons/NoBackground.svg" alt="PF2ools" class="h-8 icon" />
					</button>
					<strong class="text-xl ml-1">PF2ools</strong>
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
						href="https://ko-fi.com/mrvauxs"
						target="_blank"
						rel="noreferrer"
					>
						Donations
					</a>
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
