<script>
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Search from '$lib/Navigation/Search.svelte';
	import { hotkey } from 'svelte-gh-hotkey';
	import '$lib/Utils/MonkeyPatches.js';
	import {
		AppBar,
		AppShell,
		Drawer,
		LightSwitch,
		Toast,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import '../css/index.scss';

	function drawerOpen() {
		drawerStore.open({
			width: 'w-60'
		});
	}
</script>

<button class="hidden" on:click={drawerOpen} use:hotkey={'d'} />

<!-- Toast -->
<Toast />

<!-- Mobile Sidebar -->
<Drawer duration="250">
	<div class="m-1">
		<Search />
	</div>
	<hr />
	<Navigation />
</Drawer>

<!-- Where Everything Happens -->
<AppShell slotSidebarLeft="bg-surface-500/10">
	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar
			background="bg-surface-300/75 dark:bg-surface-800/75"
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm contents noselect" on:click={drawerOpen}>
						<img
							src="/icons/NoBackground.svg"
							alt="PF2ools"
							class="h-8 icon"
							draggable={false}
						/>
					</button>
					<strong class="text-xl ml-1">PF2ools</strong>
				</div>
			</svelte:fragment>

			<div class="hidden md:flex">
				<Search classes={'focus:w-80 transition-all'} />
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
