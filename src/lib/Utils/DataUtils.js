export default class DataEntry {
    constructor(entry) {
        Object.assign(this, entry);
        if (!this.name || !this.source) {
            throw new Error(`DataEntry must have name and source properties: ${JSON.stringify(entry)}`)
        }
    }

    hashify(name, source) {
        return `${name}_${source}`.toLowerCase()
    }

    get hash() {
        return this.hashify(this.name, this.source)
    }

    tag(displayText) {
        return `${this.name}|${this.source}${displayText ? `|${displayText}` : ''}`
    }
}
