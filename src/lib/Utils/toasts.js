import { toastStore } from '@skeletonlabs/skeleton';

export default class Toasts {
    trigger({ message, options = {} }) {
        toastStore.trigger({
            message: message,
            duration: 3000,
            position: 'b',
            isClosable: true,
            ...options,
        });
    }

    error(message) {
        console.error(message);
        this.trigger({ message: message, background: 'variant-filled-error' });
    }

    success(message) {
        this.trigger({ message: message, background: 'variant-filled-success' });
    }

    warning(message) {
        console.warn(message);
        this.trigger({ message: message, background: 'variant-filled-warning' });
    }

    clear() {
        toastStore.clear();
    }
}