//#region Formatting Tags
export { default as actionsymbol, default as as } from './Formatting/actionsymbol.svelte';
export { default as color } from './Formatting/color.svelte';
export { default as highlight } from './Formatting/highlight.svelte';
export { default as bold, default as b } from './Formatting/bold.svelte';
export { default as underline, default as u } from './Formatting/underline.svelte';
export { default as strike, default as s } from './Formatting/strike.svelte';
export { default as italic, default as i } from './Formatting/italic.svelte';
export { default as note } from './Formatting/note.svelte';
export { default as handwriting } from './Formatting/handwriting.svelte';
export { default as link } from './Formatting/link.svelte';
export { default as sup } from './Formatting/supscript.svelte';
export { default as sub } from './Formatting/subscript.svelte';
export { default as nostyle, default as n } from './Formatting/nostyle.svelte';
export { default as center, default as c } from './Formatting/center.svelte';
export { default as indentFirst, default as indentF } from './Formatting/indentFirst.svelte';
export {
	default as indentSubsequent,
	default as indentS
} from './Formatting/indentSubsequent.svelte';
//#endregion

//#region Hover Tags
export { default as ancestry } from './Hover/ancestry.svelte';
export { default as trait } from './Hover/trait.svelte';
export { default as action } from './Hover/action.svelte';
export { default as language } from './Hover/language.svelte';
export { default as condition } from './Hover/condition.svelte';
export { default as skill } from './Hover/skill.svelte';
export { default as item } from './Hover/item.svelte';
export { default as place } from './Hover/place.svelte';
export { default as feat } from './Hover/feat.svelte';
export { default as filter } from './Hover/filter.svelte';
export { default as group } from './Hover/group.svelte';
export { default as domain } from './Hover/domain.svelte';
//#endregion

//#region Inline Tags (No Real Page Behind Them)
// I realize that there is no tag yet that would fit that, ex. I want to make a skills page for referencing bonuses and uses.
//#endregion

//#region Dice Tags
export { default as dice } from './Dice/dice.svelte';
export { default as damage } from './Dice/damage.svelte';
//#endregion
