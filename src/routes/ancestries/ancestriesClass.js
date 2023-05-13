import DataEntry from '$lib/Utils/DataUtils';
export default class Ancestry extends DataEntry {
	constructor(data) {
		super(data);
		this.traitsPrototype = data.traits;

		// How to override existing properties
		Object.defineProperty(this, 'traits', {
			get() {
				return [this.traitsPrototype, this.size, this.rarity ?? 'common'].flat();
			}
		});
	}

	get type() {
		return 'ancestry';
	}

	get extraHp() {
		let array = [];
		this.heritage.forEach((h) => {
			if (h?.modif?.hp) {
				array.push({
					hp: h.modif.hp,
					name: h.name,
					source: h.source,
					hash: this.hashify(h.name, h.source)
				});
			}
		});
		return array.length ? array : null;
	}

	get heritages() {
		const heritages = new Map();
		this.heritage.map((h) => {
			const heritage = new Heritage(h, this);
			heritages.set(heritage.hash, heritage);
		});
		return heritages;
	}
}

export class Heritage extends DataEntry {
	constructor(data, ancestry) {
		super(data);
		this.ancestry = { name: ancestry.name, source: ancestry.source };
	}

	get type() {
		return 'heritage';
	}

	tag(displayText) {
		return `${this.ancestry.name}|${this.ancestry.source}|${
			displayText ? displayText : this.name
		}|${this.shortName}|${this.source}`;
	}
}
