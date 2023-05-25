export default class DataEntry {
	constructor(data) {
		if (!data) throw new Error('DataEntry must have a data object provided to it.');

		Object.assign(this, data);
		if (!this.name || !this.source) {
			throw new Error(
				`DataEntry must have name and source properties: ${JSON.stringify(data)}`
			);
		}
		this.data = data;
	}

	hashify(name, source) {
		return hashify(name ?? this.name, source ?? this.source);
	}

	get hash() {
		return this.hashify(this.name, this.source);
	}

	tag(displayText) {
		return `${this.name}|${this.source}${displayText ? `|${displayText}` : ''}`;
	}
}

export function hashify(name, source) {
	return `${name + (source ? `_${source}` : '')}`.toLowerCase();
}

// DEV
import { dev, browser } from '$app/environment';
if (dev && browser) {
	window.pf2ools = window.pf2ools || {};
	window.pf2ools.Classes = { ...window.pf2ools.Classes, DataEntry };
	console.log("%cDEV MODE", "font-weight: bold; color: red", "| Added pf2ools.Classes.DataEntry", window.pf2ools.Classes)
}