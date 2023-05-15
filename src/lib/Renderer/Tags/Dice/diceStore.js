import { localStorageStore } from '@skeletonlabs/skeleton';
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { get } from 'svelte/store';

export const diceStore = localStorageStore('diceStore', []);

import { dev } from '$app/environment';

if (dev) {
    diceStore.subscribe((value) => {
        console.log('diceStore', value);
    });
}

export class Roller {
    constructor() {
        this.store = diceStore;
        this.rolls = get(diceStore);
    }

    roll(dice) {
        return new DiceRoll(dice)
    }

    quickRoll(dice) {
        const roll = this.roll(dice);
        this.addRoll(roll);
        return roll;
    }

    addRoll(roll) {
        this.rolls = [...this.rolls, roll];
        diceStore.set(this.rolls);
    }
}

