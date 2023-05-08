const modules = import.meta.glob([
	'$data/ancestries/*.json',
	'!$data/ancestries/versatile-heritages.json'
]);

class Ancestry {
	constructor(ancestry) {
		Object.assign(this, ancestry);
	}

	get hash() {
		return `${this.name}_${this.source}`.toLowerCase()
	}
}

// lookup https://vitejs.dev/guide/features.html#json

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const ancestriesData = [];
	for (const path in modules) {
		await modules[path]().then((mod) => {
			ancestriesData.push(...mod.ancestry);
		});
	}

	const ancestries = new Map();

	ancestriesData.map((a) => new Ancestry(a)).forEach((a) => {
		ancestries.set(a.hash, a);
	});

	return {
		ancestries
	};
}
