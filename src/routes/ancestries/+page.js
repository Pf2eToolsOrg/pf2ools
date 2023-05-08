import DataEntry from '$lib/Utils/DataUtils';

const modules = import.meta.glob([
	'$data/ancestries/*.json',
	'!$data/ancestries/versatile-heritages.json'
]);

class Ancestry extends DataEntry {
	// Unique Ancestry Functions Here
	get type() {
		return 'ancestry';
	}
}

// lookup https://vitejs.dev/guide/features.html#json

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const ancestries = new Map();
	for (const path in modules) {
		await modules[path]().then((mod) => {
			let ancestriesData = mod.ancestry;
			ancestriesData.forEach((a) => {
				a._path = path;
				let ancestry = new Ancestry(a);
				ancestries.set(ancestry.hash, ancestry);
			});
		});
	}

	return {
		ancestries
	};
}
