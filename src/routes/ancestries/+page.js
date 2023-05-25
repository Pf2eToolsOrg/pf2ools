import { Storage } from 'Storage';

// lookup https://vitejs.dev/guide/features.html#json

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		ancestries: await Storage.ancestries,
		heritages: await Storage.heritages
	};
}
