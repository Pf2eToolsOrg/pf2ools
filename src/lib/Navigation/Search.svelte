<script>
	import { hotkey } from 'svelte-gh-hotkey';
	import { writable } from 'svelte/store';
	export let classes = '';
	let inputDemo = writable('');
</script>

<input
	class="search input {classes}"
	type="search"
	bind:value={$inputDemo}
	placeholder="Search..."
	use:hotkey={'f'}
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			e.target.blur();
		}
	}}
	title="Hotkey: F. Disclaimer: Won't Ctrl+F text for you, this just searches names."
/>
