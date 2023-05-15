<script context="module">
	// This "context" lets us export the function from the file itself. See: https://svelte.dev/tutorial/module-exports
	function stringToActionCopyPaste(text) {
		switch (text.toLowerCase()) {
			case '1':
			case 'a':
				return '[>]';
			case '2':
			case 'd':
				return '[>>]';
			case '3':
			case 't':
				return '[>>>]';
			case 'f':
				return '[F]';
			case 'r':
				return '[R]';
			default:
				return '[?]';
		}
	}
</script>

<script>
	export let text;
	import Toast from '$lib/Utils/Toasts.js';

	$: if (stringToActionCopyPaste(text) === '[?]') {
		new Toast().warn(`Unknown action string <b>"${text}"</b>!`);
	}
</script>

<span class="font-action" data-symbol={text} />
<span class="text-0-width">{stringToActionCopyPaste(text)}</span>
