export default class DataEntry {
    constructor(entry) {
        Object.assign(this, entry);
        if (!this.name || !this.source) {
            throw new Error(`DataEntry must have name and source properties: ${JSON.stringify(entry)}`)
        }
    }

    get hash() {
        return `${this.name}_${this.source}`.toLowerCase()
    }
}
