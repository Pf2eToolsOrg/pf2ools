export default class Document {
	constructor(data) {
		if (!(typeof data === "object" && !Array.isArray(data) && data !== null))
			throw new TypeError(
				"A Document must be given an Object. It has been provided a" + typeof data + " instead."
			);

		Object.assign(this, data);
		if (!this.name || !this.source) {
			throw new Error(`Document must have name and source properties: ${JSON.stringify(data)}`);
		}

		this.JSON = data;
	}

	hashify(name, source) {
		return hashify(name ?? this.name, source ?? this.source);
	}

	get hash() {
		return this.hashify(this.name, this.source);
	}

	tag(displayText) {
		return `${this.name}|${this.source}${displayText ? `|${displayText}` : ""}`;
	}
}

export function hashify(name, source) {
	return `${name + (source ? `_${source}` : "")}`.toLowerCase();
}

// DEV
import { dev, browser } from "$app/environment";
if (browser) {
	window.pf2ools = window.pf2ools || {};
	window.pf2ools.Classes = { ...window.pf2ools.Classes, Document };
	if (dev)
		console.log(
			"%cDEV MODE",
			"font-weight: bold; color: red",
			"| Added pf2ools.Classes.Document",
			window.pf2ools.Classes
		);
}
