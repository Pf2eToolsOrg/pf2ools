import { Ancestry, Heritage } from './ancestryClass.js';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { get } from 'svelte/store';
import "$lib/Utils/MonkeyPatches.js"

export { ancestries, heritages, Storage as default };

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
	const ancSerializer = {
		parse: (data) => {
			return new Map(JSON.parse(data)).map((a) => new Ancestry(a));
		},
		stringify: (data) => {
			return JSON.stringify([...data]);
		}
	};

	const { subscribe, set, update } = localStorageStore(key, initialValue, {
		serializer: ancSerializer
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
	const herSerializer = {
		parse: (data) => {
			return new Map(JSON.parse(data)).map((h) => new Heritage(h));
		},
		stringify: (data) => {
			return JSON.stringify([...data]);
		}
	};

	const { subscribe, set, update } = localStorageStore(key, initialValue, {
		serializer: herSerializer
	});

	function load() {
		const modules = import.meta.glob([
			'$data/ancestries/*.json'
		]);

		for (const path in modules) {
			// Note, impossible to do console.group, don't even try.
			modules[path]().then((mod) => {
				if (mod.versatileHeritage) {
					let versatileHeritage = mod.versatileHeritage;
					versatileHeritage.forEach((a) => {
						a._path = path;
						const heritage = new Heritage(a);
						this.update((x) => {
							if (dev)
								console.log(
									'%cDEV MODE',
									'font-weight: bold; color: red',
									'| Added ' + heritage.name + ' (Versatile Heritage)'
								);
							x.set(heritage.hash, heritage);
							return x;
						});
					});
				} else {
					let ancestriesData = mod.ancestry;
					ancestriesData.forEach((a) => {
						let heritagesData = a.heritage;
						heritagesData.forEach((h) => {
							h.ancestryName = a.name
							h.ancestrySource = a.source
							h._path = path;
							const heritage = new Heritage(h);
							this.update((x) => {
								if (dev)
									console.log(
										'%cDEV MODE',
										'font-weight: bold; color: red',
										'| Added ' + heritage.name + ` (Heritage)`
									);
								x.set(heritage.hash, heritage);
								return x;
							});
						});
					});
				}
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
