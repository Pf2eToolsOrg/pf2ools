const modules = import.meta.glob([
    '$data/ancestries/*.json',
    '!$data/ancestries/versatile-heritages.json'
]);

// lookup https://vitejs.dev/guide/features.html#json

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const ancestries = [];
    for (const path in modules) {
        await modules[path]().then((mod) => {
            ancestries.push(...mod.ancestry)
        });
    }
    return {
        ancestries
    };
}
