import Toasts from '../Utils/toasts';
const toasts = new Toasts();

/**
 *
 * @param {string} The String to be Rendered
 * @param {object} options Options for the Renderer
 * @param {string} options.prefix HTML Prefix of the String, default <p class="pf2-stat__text">
 * @param {string} options.suffix HTML Suffix of the String, default </p>
 * @param {boolean} options.noWrap Do not add any wrappers such as the default prefix and suffix. Default true.
 * @returns {string} The Rendered HTML String
 */
export default function TagRenderer(string, options = { noWrap: true }) {
	if (!options.noWrap && !options.prefix && !options.suffix) {
		options.prefix = `<p class="pf2-stat__text">`;
		options.suffix = '</p>';
	}

	string = renderString(string, options);

	if (options.prefix && options.suffix) string = options.prefix + string + options.suffix;

	return string;
}

function renderString(string, options) {
	const tagSplit = splitByTags(string);
	const len = tagSplit.length;

	let finishedString = '';

	for (let i = 0; i < len; ++i) {
		const s = tagSplit[i];
		if (!s) continue;
		if (s.startsWith('{@')) {
			const [tag, text] = splitFirstSpace(s.slice(1, -1));
			finishedString += renderTag(options, tag, text);
		} else {
			finishedString += s;
		}
	}
	return finishedString;
}

function renderTag(options, tag, text) {
	switch (tag) {
		case '@as':
		case '@actionsymbol':
			return `<span class="pf2-action-icon" data-symbol="${text}"></span><span class="pf2-action-icon-copy-text">${this._renderString_actionCopyText(
				text
			)}</span>`;

		case '@b':
		case '@bold':
			return `<b>${TagRenderer(text)}</b>`;

		case '@i':
		case '@italic':
			return `<i>${TagRenderer(text)}</i>`;

		case '@u':
		case '@underline':
			return `<u>${TagRenderer(text)}</u>`;

		case '@s':
		case '@strike':
			return `<s>${TagRenderer(text)}</s>`;

		case '@c':
		case '@center':
			return `<span class="text-center block">${TagRenderer(text)}</span>`;

		case '@note':
			return `<i class="note-muted">${TagRenderer(text)}</i>`;

		case '@link': {
			const [displayText, url] = splitTagByPipe(text);
			let outUrl = url == null ? displayText : url;
			if (!outUrl.startsWith('http')) outUrl = `http://${outUrl}`;
			return `<a href=${outUrl}>${TagRenderer(displayText)}</a>`;
		}

		default:
			toasts.warn(`Unknown tag: ${tag}`);
			return `<span class="bg-warning-500">{${tag} ${TagRenderer(text)}}</span>`;
	}
}

const splitByTags = (string) => splitByTagsBase('@')(string); // Split by @
// const splitByPropertyInjectors = () => splitByTagsBase("=");

const splitTagByPipe = (string) => splitByPipeBase('@')(string); // Split by |

function splitFirstSpace(string) {
	const firstIndex = string.indexOf(' ');
	return firstIndex === -1
		? [string, '']
		: [string.substr(0, firstIndex), string.substr(firstIndex + 1)];
}

function splitByTagsBase(leadingCharacter) {
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

function splitByPipeBase(leadingCharacter) {
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
