import { Ancestry, Heritage } from "./classes.js";
import { writable, get } from "svelte/store";
import "$lib/Utils/MonkeyPatches.js";

export { ancestries, heritages, Storage as default };

class Storage {
	constructor() {
		this.core = {};
		this.ancestries = ancestries;
		this.heritages = heritages;

		this.homebrew = {};
	}

	loadAll() {
		this.ancestries.load();
		this.heritages.load();
	}
}

const ancestries = new Ancestries();
function Ancestries() {
	const { subscribe, set, update } = writable(new Map());

	function load() {
		const modules = import.meta.glob(["$data/ancestries/*.json", "!$data/ancestries/versatile-heritages.json"]);

		for (const path in modules) {
			// Note, impossible to do console.group, don't even try.
			modules[path]().then((mod) => {
				let ancestriesData = mod.ancestry;
				ancestriesData.forEach((a) => {
					a._path = path;
					const ancestry = new Ancestry(a);
					this.update((x) => {
						if (dev) console.log("%cDEV MODE", "font-weight: bold; color: red", "| Added " + ancestry.name);
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
		load,
	};
}

const heritages = new Heritages();
function Heritages() {
	const { subscribe, set, update } = writable(new Map());

	function load() {
		const modules = import.meta.glob(["$data/ancestries/*.json"]);

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
									"%cDEV MODE",
									"font-weight: bold; color: red",
									"| Added " + heritage.name + " (Versatile Heritage)"
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
							h.ancestryName = a.name;
							h.ancestrySource = a.source;
							h._path = path;
							const heritage = new Heritage(h);
							this.update((x) => {
								if (dev)
									console.log(
										"%cDEV MODE",
										"font-weight: bold; color: red",
										"| Added " + heritage.name + ` (Heritage)`
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
		load,
	};
}

// DEV
import { dev, browser } from "$app/environment";
if (dev && browser) {
	window.pf2ools = window.pf2ools || {};
	window.pf2ools.Data = window.pf2ools.Data || {};
	window.pf2ools.Data.ancestries = ancestries;
	window.pf2ools.Data.heritages = heritages;
	if (dev) {
		console.log("%cDEV MODE", "font-weight: bold; color: red", "| Added Ancestries Data", get(ancestries));
		console.log("%cDEV MODE", "font-weight: bold; color: red", "| Added Heritages Data", get(heritages));
	}
}
