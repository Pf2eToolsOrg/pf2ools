<script>
	import { page } from '$app/stores';
	export let link = {};
	export let openFunction;
	export let selected = false;
</script>

<a
	on:click={openFunction}
	class:!variant-ghost-surface={selected || link.href === $page.url.pathname}
	href={link.href}
>
	{link.label}
</a>
