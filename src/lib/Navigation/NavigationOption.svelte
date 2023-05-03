<script>
	import { page } from '$app/stores';
	export let link = {};
	export let openFunction;
	export let selected = false;
	import Fa from 'svelte-fa';
	import * as fort from '@fortawesome/free-solid-svg-icons';

	function pickRandom(icons) {
		if (Array.isArray(icons)) {
			return icons[Math.floor(Math.random() * icons.length)];
		} else {
			return icons;
		}
	}
</script>

{#if link.type === 'divider'}
	<hr />
{:else}
	<a
		on:click={openFunction}
		class:!variant-ghost-surface={selected || link.href === $page.url.pathname}
		href={link.href}
	>
		{#if fort[pickRandom(link.icon)]}
			<Fa icon={fort[pickRandom(link.icon)]} />
		{:else}
			{@html link.icon}
		{/if}
		<span>{link.label}</span>
	</a>
{/if}
