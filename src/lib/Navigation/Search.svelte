<script>
	import { hotkey } from 'svelte-gh-hotkey';
	let inputDemo = '';
</script>

<input
	class="search input focus:w-80 transition-all"
	type="search"
	bind:value={inputDemo}
	placeholder="Search..."
	use:hotkey={'f'}
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			e.target.blur();
		}
	}}
	title="Hotkey: F. Disclaimer: unlikely to search everywhere."
/>
