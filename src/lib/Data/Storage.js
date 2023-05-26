import { Ancestry, Heritage } from './ancestryClass.js';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { get } from 'svelte/store';

export { ancestries, heritages, Storage as default };

// Allows for Map Serialization
const mapSerializer = {
	parse: (data) => {
		return new Map(JSON.parse(data));
	},
	stringify: (data) => {
		return JSON.stringify([...data]);
	}
};

class Storage {
	constructor() {
		this.ancestries = ancestries;
		this.heritages = heritages;
	}

	loadAll() {
		this.ancestries.load();
		this.heritages.load();
	}
}

const ancestries = new Ancestries();
function Ancestries(key = 'ancestries', initialValue = new Map()) {
	const { subscribe, set, update } = localStorageStore(key, initialValue, {
		serializer: mapSerializer
	});

	function load() {
		const modules = import.meta.glob([
			'$data/ancestries/*.json',
			'!$data/ancestries/versatile-heritages.json'
		]);

		for (const path in modules) {
			// Note, impossible to do console.group, don't even try.
			modules[path]().then((mod) => {
				let ancestriesData = mod.ancestry;
				ancestriesData.forEach((a) => {
					a._path = path;
					const ancestry = new Ancestry(a);
					this.update((x) => {
						if (dev)
							console.log(
								'%cDEV MODE',
								'font-weight: bold; color: red',
								'| Added ' + ancestry.name
							);
						x.set(ancestry.hash, ancestry);
						return x;
					});
				});
			});
		}
	}

	return {
		subscribe,
		set,
		update,
		load
	};
}

const heritages = new Heritages();
function Heritages(key = 'heritages', initialValue = new Map()) {
	const { subscribe, set, update } = localStorageStore(key, initialValue, {
		serializer: mapSerializer
	});

	function load() {
		import('$data/ancestries/versatile-heritages.json').then((mod) => {
			mod.versatileHeritage.map((h) => {
				h._path = '$data/ancestries/versatile-heritages.json';
				return h;
			});
			mod.versatileHeritage.forEach((h) => {
				const heritage = new Heritage(h);
				this.update((x) => {
					if (dev)
						console.log(
							'%cDEV MODE',
							'font-weight: bold; color: red',
							'| Added ' + heritage.name
						);
					x.set(heritage.hash, heritage);
					return x;
				});
			});
		});
	}

	return {
		subscribe,
		set,
		update,
		load
	};
}

// DEV
import { dev, browser } from '$app/environment';
if (dev && browser) {
	window.pf2ools = window.pf2ools || {};
	window.pf2ools.Data = window.pf2ools.Data || {};
	window.pf2ools.Data.ancestries = ancestries;
	window.pf2ools.Data.heritages = heritages;
	console.log(
		'%cDEV MODE',
		'font-weight: bold; color: red',
		'| Added Ancestries Data',
		get(ancestries)
	);
	console.log(
		'%cDEV MODE',
		'font-weight: bold; color: red',
		'| Added Heritages Data',
		get(heritages)
	);
}
