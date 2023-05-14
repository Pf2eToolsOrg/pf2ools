
export function splitByTagsBase(leadingCharacter) {
	return function (string) {
		let tagDepth = 0;
		let char, char2;
		const out = [];
		let curStr = '';
		let isLastOpen = false;

		const len = string.length;
		for (let i = 0; i < len; ++i) {
			char = string[i];
			char2 = string[i + 1];

			switch (char) {
				case '{':
					isLastOpen = true;
					if (char2 === leadingCharacter) {
						if (tagDepth++ > 0) {
							curStr += '{';
						} else {
							out.push(curStr.replace(/<VE_LEAD>/g, leadingCharacter));
							curStr = `{${leadingCharacter}`;
							++i;
						}
					} else curStr += '{';
					break;

				case '}':
					isLastOpen = false;
					curStr += '}';
					if (tagDepth !== 0 && --tagDepth === 0) {
						out.push(curStr.replace(/<VE_LEAD>/g, leadingCharacter));
						curStr = '';
					}
					break;

				case leadingCharacter: {
					if (!isLastOpen) curStr += '<VE_LEAD>';
					else curStr += leadingCharacter;
					break;
				}

				default:
					isLastOpen = false;
					curStr += char;
					break;
			}
		}

		if (curStr) out.push(curStr.replace(/<VE_LEAD>/g, leadingCharacter));

		return out;
	};
}
export function splitFirstSpace(string) {
	const firstIndex = string.indexOf(' ');
	return firstIndex === -1
		? [string, '']
		: [string.substr(0, firstIndex), string.substr(firstIndex + 1)];
}
export function splitByPipeBase(leadingCharacter) {
	return function (string) {
		let tagDepth = 0;
		let char, char2;
		const out = [];
		let curStr = '';

		const len = string.length;
		for (let i = 0; i < len; ++i) {
			char = string[i];
			char2 = string[i + 1];

			switch (char) {
				case '{':
					if (char2 === leadingCharacter) tagDepth++;
					curStr += '{';

					break;

				case '}':
					if (tagDepth) tagDepth--;
					curStr += '}';

					break;

				case '|': {
					if (tagDepth) curStr += '|';
					else {
						out.push(curStr);
						curStr = '';
					}
					break;
				}

				default: {
					curStr += char;
					break;
				}
			}
		}

		if (curStr) out.push(curStr);
		return out;
	};
}
export const splitByTags = splitByTagsBase('@');
export const splitByPropertyInjectors = splitByTagsBase('=');
export const splitTagByPipe = splitByPipeBase('@');

const timeUnits = {};
timeUnits.TM_A = 'action';
timeUnits.TM_AA = 'two';
timeUnits.TM_AAA = 'three';
timeUnits.TM_R = 'reaction';
timeUnits.TM_F = 'free';
timeUnits.TM_ROUND = 'round';
timeUnits.TM_MINS = 'minute';
timeUnits.TM_HRS = 'hour';
timeUnits.TM_DAYS = 'day';
timeUnits.TM_VARIES = 'varies';
timeUnits.TIME_ACTIONS = [timeUnits.TM_A, timeUnits.TM_R, timeUnits.TM_F];

export function timeToFullEntry(time) {
	if (time.entry != null) return time.entry;
	if (timeUnits.TIME_ACTIONS.includes(time.unit)) {
		if (time.number === 1 && time.unit === timeUnits.TM_F) return '{@as f}';
		if (time.number === 1 && time.unit === timeUnits.TM_R) return '{@as r}';
		if (time.number === 2 && time.unit === timeUnits.TM_A) return '{@as 2}';
		if (time.number === 3 && time.unit === timeUnits.TM_A) return '{@as 3}';
		return '{@as 1}';
	}
	return `${time.number} ${time.unit}${time.number >= 2 ? 's' : ''}`;
}