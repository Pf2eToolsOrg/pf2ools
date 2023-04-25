<script>
	import { hotkey } from 'svelte-gh-hotkey';
	let inputDemo = '';
</script>

<input class="input" type="search" name="demo" bind:value={inputDemo} placeholder="Search..." use:hotkey={'f'} title="Hotkey: F. Disclaimer: unlikely to search everywhere."/>