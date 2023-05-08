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