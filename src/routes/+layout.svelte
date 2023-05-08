<script>
	import DrawerNavigation from '$lib/Navigation/DrawerNavigation.svelte';
	import Search from '$lib/Navigation/Search.svelte';
	import TopNavigation from '$lib/Navigation/TopNavigation.svelte';
	import '$lib/Utils/MonkeyPatches.js';
	import {
		AppBar,
		AppShell,
		Drawer,
		LightSwitch,
		Toast,
		drawerStore,
		storePopup
	} from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { swipe } from 'svelte-gestures';
	import { hotkey } from 'svelte-gh-hotkey';
	import '../app.postcss';
	import '../css/index.scss';

	function drawerOpen() {
		drawerStore.open({
			width: 'w-80'
		});
	}

	import { navigating } from '$app/stores';

	navigating.subscribe((value) => {
		if (value === null) return;
		if (value.from.route.id !== value.to.route.id) console.clear();
	});

	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { mobileCheck } from '$lib/Utils/MiscUtils.js';
	function handler(event) {
		if (!mobileCheck())
			return console.warn('Not a mobile device. Ignoring swipe motion to open drawer.');
		let direction = event.detail.direction;
		if (direction === 'left') drawerStore.close();
		if (direction === 'right') drawerOpen();
	}
</script>

<button class="hidden" on:click={drawerOpen} use:hotkey={'d'} />

<!-- Swipe to Open Drawer Handler-->
<div use:swipe={{ timeframe: 500, minSwipeDistance: 100 }} on:swipe={handler} class="h-screen">
	<!-- Toast -->
	<Toast />

	<!-- Mobile Sidebar -->
	<Drawer duration="250">
		<div class="m-1">
			<Search />
		</div>
		<hr />
		<DrawerNavigation />
		<div class="fixed bottom-0 p-2">
			<span class="text-sm hidden md:contents">
				<kbd>Esc</kbd> to close. <kbd>D</kbd> to open. <kbd>Tabs</kbd> to navigate.
			</span>
			<span class="text-sm md:hidden px-14"> You can also swipe to open. </span>
		</div>
	</Drawer>
	<!-- Where Everything Happens -->
	<AppShell slotSidebarLeft="bg-surface-500/10">
		<!-- Header -->
		<svelte:fragment slot="header">
			<div class="bg-surface-300/75 dark:bg-surface-800/75 shadow-xl">
				<AppBar
					class="container"
					background={null}
					gridColumns="grid-cols-3"
					slotDefault="place-self-center"
					slotTrail="place-content-end"
					padding="py-3 md:py-1"
				>
					<svelte:fragment slot="lead">
						<div class="flex items-center">
							<button class="btn btn-sm contents noselect" on:click={drawerOpen}>
								<img
									src="/icons/NoBackground.svg"
									alt="PF2ools"
									class="h-8 icon"
									draggable={false}
									title="Open Sidebar (Hotkey: D)"
								/>
							</button>
							<span class="font-gin md:hidden whitespace-nowrap">
								&lt;- Click to navigate.
							</span>
						</div>
					</svelte:fragment>

					<div class="hidden md:flex">
						<Search classes={'w-40 md:focus:w-80 z-100 transition-all max-h-8'} />
					</div>

					<!-- Trailing Buttons (Dark Mode, Discord, GitHub, etc.) -->
					<svelte:fragment slot="trail">
						<div class="noselect">
							<LightSwitch />
						</div>
						<div class="hidden lg:contents">
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
			</div>
			<AppBar background={null} padding={null} class="container z-10">
				<TopNavigation />
			</AppBar>
		</svelte:fragment>

		<!-- Page Route Content -->
		<slot />
	</AppShell>
</div>

<style>
	.icon {
		transform: scale(1.75);
		min-width: 4rem;
		margin: 0 1em 0 0;
		filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4));
	}
</style>
