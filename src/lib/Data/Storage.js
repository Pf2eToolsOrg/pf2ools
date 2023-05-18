import Ancestry from './ancestriesClass.js';

class Storage {
	constructor() {
		this._ancestries = null;
	}

	get ancestries() {
		return (
			this._ancestries ??
			(async () => {
				const modules = import.meta.glob([
					'$data/ancestries/*.json',
					'!$data/ancestries/versatile-heritages.json'
				]);
				const ancestries = new Map();
				for (const path in modules) {
					await modules[path]().then((mod) => {
						let ancestriesData = mod.ancestry;
						ancestriesData.forEach((a) => {
							a._path = path;
							const ancestry = new Ancestry(a);
							ancestries.set(ancestry.hash, ancestry);
						});
					});
				}
				this._ancestries = ancestries;
				return this._ancestries;
			})()
		);
	}
}

const newStorage = new Storage();
export { newStorage as Storage };

// DEV
import { dev, browser } from '$app/environment';
if (dev && browser) {
	window.pf2ools = window.pf2ools || {};
	window.pf2ools.Storage = newStorage;
}
