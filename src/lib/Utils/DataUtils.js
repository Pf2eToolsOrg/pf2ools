export default class DataEntry {
    constructor(entry) {
        Object.assign(this, entry);
        if (!this.name || !this.source) {
            throw new Error(`DataEntry must have name and source properties: ${JSON.stringify(entry)}`)
        }
    }

    hashify(name, source) {
        return hashify(name ?? this.name, source ?? this.source)
    }

    get hash() {
        return this.hashify(this.name, this.source)
    }

    tag(displayText) {
        return `${this.name}|${this.source}${displayText ? `|${displayText}` : ''}`
    }
}

export function hashify(name, source) {
    return `${name + (source ? `_${source}` : "")}`.toLowerCase()
}