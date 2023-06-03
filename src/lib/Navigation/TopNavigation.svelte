<script>
	import { page } from "$app/stores";
	import * as fort from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { default as JSON } from "./pages.js";
	export let pages = JSON;
	export let rowOrCol = "row";
	export let top = "top";

	import { popup } from "@skeletonlabs/skeleton";

	// Dropdowns: https://flowbite.com/docs/components/dropdowns/#multi-level-dropdown

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}

	let currentPage = $page.url.pathname;
	let selected;

	$: selected = (link) => currentPage === link.href || link?.pages?.find((page) => currentPage === page.href);

	page.subscribe((value) => {
		currentPage = value.url.pathname;
	});
</script>

<div class="flex flex-{rowOrCol} flex-wrap whitespace-normal">
	{#each pages as link}
		{#if link.pages}
			<button
				class="flex btn btn-sm hover:variant-soft-primary"
				class:variant-filled-primary={selected(link)}
				class:rounded-t-none={top}
				disabled={link.offline}
				use:popup={{
					event: "click",
					target: "dropdown-" + link.label,
					placement: "bottom-start",
				}}
				id="navbtn"
			>
				<span>
					{#if fort[pickRandom(link.icon)]}
						<Fa icon={fort[pickRandom(link.icon)]} />
					{:else}
						{@html link.icon}
					{/if}
				</span>
				<span>{link.label}</span>
			</button>
			<div class="absolute card shadow-md" data-popup="dropdown-{link.label}">
				<div class="flex flex-col p-1 rounded-md shadow-md">
					<svelte:self pages={link.pages} rowOrCol="col" top={false} />
				</div>
				<div class="arrow bg-surface-300-600-token" />
			</div>
		{:else if link.func}
			<button
				disabled={link.offline}
				class="flex btn btn-sm hover:variant-soft-primary"
				class:rounded-t-none={top}
				on:click={link.func}
			>
				<span>
					{#if fort[pickRandom(link.icon)]}
						<Fa icon={fort[pickRandom(link.icon)]} />
					{:else}
						{@html link.icon}
					{/if}
				</span>
				<span>{link.label}</span>
			</button>
		{:else if link.type === "divider"}
			<hr />
		{:else}
			<a
				class="flex btn btn-sm hover:variant-soft-primary"
				class:variant-filled-primary={selected(link)}
				class:rounded-t-none={top}
				class:disabled={link.offline}
				tabindex={link.offline ? "-1" : null}
				href={link.href}
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
</div>
