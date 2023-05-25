import { Ancestry, Heritage } from './ancestryClass.js';

class Storage {
	constructor() {
		this._ancestries = null;
		this._heritages = null;
	}

	getData = {
		ancestries: async () => {
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

			return ancestries;
		},
		heritages: async () => {
			let heritagesArray = [];
			await import('$data/ancestries/versatile-heritages.json').then((mod) => {
				mod.versatileHeritage.map(h => {
					h._path = '$data/ancestries/versatile-heritages.json';
					return h;
				})
				heritagesArray = mod.versatileHeritage;
			});

			(await this.ancestries).forEach((a) => {
				heritagesArray.push(...a.heritage)
			});

			const heritages = new Map();

			heritagesArray.forEach((h) => {
				const heritage = new Heritage(h);
				heritages.set(heritage.hash, heritage);
			});

			return heritages;
		}
	}

	get ancestries() {
		return (
			this._ancestries ??
			(async () => {
				this._ancestries = await this.getData.ancestries();
				return this._ancestries;
			})()
		);
	}

	get heritages() {
		return (
			this._heritages ??
			(async () => {
				this._heritages = await this.getData.heritages();
				return this._heritages;
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
	console.log("%cDEV MODE", "font-weight: bold; color: red", "| Added pf2ools.Storage", newStorage)
}
