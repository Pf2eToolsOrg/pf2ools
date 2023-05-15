import { localStorageStore } from '@skeletonlabs/skeleton';
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { get } from 'svelte/store';
export const diceStore = localStorageStore('diceStore', []);

export class Roller {
    constructor() {
        this.store = diceStore;
        this.rolls = get(diceStore);
    }

    clean() {
        this.rolls = [];
        diceStore.set(this.rolls);
    }

    roll(dice) {
        return new DiceRoll(dice)
    }

    quickRoll() {
        const roll = this.roll(...arguments);
        this.addRoll(roll);
        return roll;
    }

    addRoll(roll) {
        this.rolls = [...this.rolls, roll];
        diceStore.set(this.rolls);
    }
}

// DEBUG
import { dev, browser } from '$app/environment';
if (dev) {
    diceStore.subscribe((value) => {
        console.log(`You rolled ${value.at(-1)}`, value.at(-1));
    });

    if (browser) {
        window.Roller = Roller;
        window.DiceRoller = DiceRoll;
    }
}
