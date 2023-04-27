<script>
	import { page } from '$app/stores';
	export let link = {};
	export let openFunction;
	export let selected = false;
	import Fa from 'svelte-fa';
	import * as fort from '@fortawesome/free-solid-svg-icons';
</script>

<a
	on:click={openFunction}
	class:!variant-ghost-surface={selected || link.href === $page.url.pathname}
	href={link.href}
>
	<Fa icon={fort[link.icon]} />
	<span>{link.label}</span>
</a>
