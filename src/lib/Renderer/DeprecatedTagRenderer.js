import toasts from "../Utils/Toasts";
import { getValidColor, stringToActionCopyPaste } from "./RendererUtils";

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
		options.suffix = "</p>";
	}

	string = renderString(string, options);

	if (options.prefix && options.suffix) string = options.prefix + string + options.suffix;

	return string;
}

function renderString(string, options) {
	const tagSplit = splitByTags(string);
	const len = tagSplit.length;

	let finishedString = "";

	for (let i = 0; i < len; ++i) {
		const s = tagSplit[i];
		if (!s) continue;
		if (s.startsWith("{@")) {
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
		case "@as":
		case "@actionsymbol":
			return `<span class="font-action" data-symbol="${text}"></span>
			<span class="opacity-0 text-[0px] left-2 absolute">${stringToActionCopyPaste(text)}</span>`;

		case "@b":
		case "@bold":
			return `<b>${TagRenderer(text)}</b>`;

		case "@i":
		case "@italic":
			return `<i>${TagRenderer(text)}</i>`;

		case "@u":
		case "@underline":
			return `<u>${TagRenderer(text)}</u>`;

		case "@s":
		case "@strike":
			return `<s>${TagRenderer(text)}</s>`;

		case "@c":
		case "@center":
			return `<span class="text-center block">${TagRenderer(text)}</span>`;

		case "@note":
			return `<i class="note-muted">${TagRenderer(text)}</i>`;

		case "@link": {
			const [displayText, url] = splitTagByPipe(text);
			let outUrl = url == null ? displayText : url;
			if (!outUrl.startsWith("http")) outUrl = `http://${outUrl}`;
			return `<a href=${outUrl}>${TagRenderer(displayText)}</a>`;
		}

		case "@color": {
			const [toDisplay, color] = splitTagByPipe(text);
			const scrubbedColor = getValidColor(color);
			return `<span style="color: ${scrubbedColor}">${TagRenderer(toDisplay)}</span>`;
		}

		case "@handwriting": {
			return `<span class="font-basing italic text-xl">${TagRenderer(text)}</span>`;
		}

		case "@highlight": {
			const [toDisplay, color] = splitTagByPipe(text);
			const scrubbedColor = color ? getValidColor(color) : null;
			return (
				(scrubbedColor
					? `<span style="background-color: ${scrubbedColor}">`
					: `<span class="bg-warning-200-700-token">`) +
				TagRenderer(toDisplay) +
				`</span>`
			);
		}

		case "@sup":
			return `<sup>${TagRenderer(text)}</sup>`;

		case "@sub":
			return `<sub>${TagRenderer(text)}</sub>`;

		case "@n":
		case "@nostyle": {
			return `<span class="appearance-none font-no inline-block">${TagRenderer(text)}</span>`;
		}

		case "@indentFirst": {
			return `<span class="text-indent-first inline-block">${TagRenderer(text)}</span>`;
		}

		case "@indentSubsequent": {
			return `<span class="text-indent-subsequent inline-block">${TagRenderer(text)}</span>`;
		}

		default:
			toasts.warn(`Unknown tag: ${tag}`);
			return `<span class="bg-warning-400 dark:bg-warning-600">{${tag} ${TagRenderer(text)}}</span>`;
	}
}

export const tags = [...renderTag.toString().matchAll(/case '(@\w+?)':/g)].map((m) => m[1]);
