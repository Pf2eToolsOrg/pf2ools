const modules = import.meta.glob([
    '$data/ancestries/*.json',
    '!$data/ancestries/versatile-heritages.json'
]);

const ancestries = [];
for (const path in modules) {
    modules[path]().then((mod) => {
        ancestries.push(...mod.ancestry)
    });
}

// lookup https://vitejs.dev/guide/features.html#json

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return {
        ancestries
    };
}
