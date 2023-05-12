import { toastStore } from '@skeletonlabs/skeleton';
import { browser } from '$app/environment'
import { get } from 'svelte/store';

export default class Toasts {
	trigger(options) {
		toastStore.trigger({
			message: "Placeholder",
			duration: 3000,
			timeout: 5000 + this.toasts().length * 1000,
			position: 'b',
			isClosable: true,
			...options
		});
	}

	lastToast() {
		return get(toastStore).at(-1);
	}

	toasts() {
		return get(toastStore);
	}

	async error(message) {
		console.error(message);
		this.trigger({ message: message, background: 'variant-filled-error' });
	}

	async success(message) {
		this.trigger({ message: message, background: 'variant-filled-success' });
	}

	async warn(message) {
		this.warning(message);
	}

	async warning(message) {
		console.warn(message);
		this.trigger({ message: message, background: 'variant-filled-warning' });
	}

	clear() {
		toastStore.clear();
	}
}

if (browser) {
	window.toasts = new Toasts();
}
