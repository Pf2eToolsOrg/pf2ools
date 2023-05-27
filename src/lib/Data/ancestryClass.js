import DataEntry from '$lib/Data/DataUtils';
import { heritages } from 'Storage'

export class Ancestry extends DataEntry {
	constructor(data) {
		super(data);
		this.traitsPrototype = data.traits;

		// How to override existing properties
		Object.defineProperty(this, 'traits', {
			get() {
				return [...new Set([this.traitsPrototype, this.size, this.rarity ?? 'common'].flat())];
			}
		});

		heritages.subscribe((heritages) => {
			this.heritages = heritages.filter((h) => h.versatile || (h.ancestryName === this.name && h.ancestrySource === this.source));
		});
	}

	get type() {
		return 'ancestry';
	}

	get extraHp() {
		let array = [];
		this.heritages.forEach((h) => {
			if (h?.modif?.hp?.ancestry) {
				array.push({
					hp: h.modif.hp.ancestry,
					name: h.name,
					source: h.source,
					hash: this.hashify(h.name, h.source)
				});
			}
		});
		return array.length ? array : null;
	}
}

export class Heritage extends DataEntry {
	constructor(data, ancestry) {
		super(data);

		if (ancestry) {
			this.ancestryName = ancestry.name;
			this.ancestrySource = ancestry.source;
		}
	}

	get type() {
		return 'heritage';
	}

	tag(displayText) {
		return `${this.ancestryName ?? 'Human'}|${this.ancestrySource ?? 'CRB'}|${displayText ?? this.name
			}|${this.name}|${this.source}`;
	}
}

// DEV
import { dev, browser } from '$app/environment';
if (dev && browser) {
	window.pf2ools = window.pf2ools || {};
	window.pf2ools.Classes = { ...window.pf2ools.Classes, Ancestry, Heritage };
	console.log(
		'%cDEV MODE',
		'font-weight: bold; color: red',
		'| Added Ancestry & Heritage Classes',
		window.pf2ools.Classes
	);
}
