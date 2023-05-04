const modules = import.meta.glob([
    '$data/ancestries/*.json',
    '!$data/ancestries/versatile-heritages.json'
]);
import { get, writable } from 'svelte/store';

const ancestries = writable([]);

for (const path in modules) {
    modules[path]().then((mod) => {
        console.log(...mod.ancestry)
    });
}

// lookup https://vitejs.dev/guide/features.html#json

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return {
        ancestries: new Promise((fulfil) => {
            fulfil(get(ancestries))
        })
    };
}
