//#region Map

/**
 * @callback FilterFunction The function to use for filtering.
 * @param {*} value The value of the individual Map entry.
 * @param {string} key The key of the individual Map entry.
 * @returns {boolean} Whether to keep the entry.
 */

/**
 * A Filter monkeypatch for Map. It takes a function which returns true or false.
 * @param {FilterFunction} func The function to use for filtering.
 * @returns {Map} A new Map with the filtered values.
 *
 * @example map.filter((value, key) => value.hp === 8)
 * map.filter((value, key) => key === "anadi_lome")
 */
Map.prototype.filter =
	Map.prototype.filter ||
	function (func) {
		const out = new Map();
		for (const [k, v] of this) {
			if (func(v, k)) out.set(k, v);
		}
		return out;
	};

Map.prototype.map = Map.prototype.map || function (func) {
	const out = new Map();
	for (const [k, v] of this) {
		out.set(k, func(v, k));
	}
	return out;
};

Map.prototype.toValueArray =
	Map.prototype.toValueArray ||
	function () {
		return [...this.values()];
	};

Map.prototype.toKeyArray =
	Map.prototype.toKeyArray ||
	function () {
		return [...this.keys()];
	};

Map.prototype.firstKey =
	Map.prototype.firstKey ||
	function () {
		return this.toKeyArray()[0];
	};

Map.prototype.firstValue =
	Map.prototype.firstValue ||
	function () {
		return this.toValueArray()[0];
	};

//#endregion

//#region Array

Array.prototype.toTitleCase =
	Array.prototype.toTitleCase ||
	function () {
		return this.map((s) => s.toTitleCase());
	};

/**
 * @param {string} joiner First Joiner, usually a Comma
 * @param {string} lastJoiner Second Joiner, usually an " and " or " or "
 * @param {boolean} nonOxford If true, will not add a comma before the lastJoiner, resulting in strings like "a, b or c"
 * @returns {string}
 */
Array.prototype.joinConjunct =
	Array.prototype.joinConjunct ||
	function (joiner, lastJoiner, nonOxford) {
		if (this.length === 0) return '';
		if (this.length === 1) return this[0];
		if (this.length === 2) return this.join(lastJoiner);
		else {
			let outStr = '';
			for (let i = 0; i < this.length; ++i) {
				outStr += this[i];
				if (i < this.length - 2) outStr += joiner;
				else if (i === this.length - 2)
					outStr += `${!nonOxford && this.length > 2 ? joiner.trim() : ''}${lastJoiner}`;
			}
			return outStr;
		}
	};
//#endregion

//#region String
String.prototype.remove = function (text) {
	return this.replaceAll(text, '');
};

String.prototype.uppercaseFirst =
	String.prototype.uppercaseFirst ||
	function () {
		const str = this.toString();
		if (str.length === 0) return str;
		if (str.length === 1) return str.charAt(0).toUpperCase();
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

String.prototype.lowercaseFirst =
	String.prototype.lowercaseFirst ||
	function () {
		const str = this.toString();
		if (str.length === 0) return str;
		if (str.length === 1) return str.charAt(0).toLowerCase();
		return str.charAt(0).toLowerCase() + str.slice(1);
	};

String.prototype.uq =
	String.prototype.uq ||
	function () {
		return this.unescapeQuotes();
	};

String.prototype.toTitleCase =
	String.prototype.toTitleCase ||
	function () {
		let str = this.replace(
			/([^\W_]+[^\s-/]*) */g,
			(m0) => m0.charAt(0).toUpperCase() + m0.substr(1).toLowerCase()
		);

		// Require space surrounded, as title-case requires a full word on either side
		StrUtil._TITLE_LOWER_WORDS_RE = StrUtil._TITLE_LOWER_WORDS_RE =
			StrUtil.TITLE_LOWER_WORDS.map((it) => new RegExp(`\\s${it}\\s`, 'gi'));
		StrUtil._TITLE_UPPER_WORDS_RE = StrUtil._TITLE_UPPER_WORDS_RE =
			StrUtil.TITLE_UPPER_WORDS.map((it) => new RegExp(`\\b${it}\\b`, 'g'));

		const len = StrUtil.TITLE_LOWER_WORDS.length;
		for (let i = 0; i < len; i++) {
			str = str.replace(StrUtil._TITLE_LOWER_WORDS_RE[i], (txt) => txt.toLowerCase());
		}

		const len1 = StrUtil.TITLE_UPPER_WORDS.length;
		for (let i = 0; i < len1; i++) {
			str = str.replace(
				StrUtil._TITLE_UPPER_WORDS_RE[i],
				StrUtil.TITLE_UPPER_WORDS[i].toUpperCase()
			);
		}

		return str;
	};

String.prototype.toSentenceCase =
	String.prototype.toSentenceCase ||
	function () {
		const out = [];
		const re = /([^.!?]+)([.!?]\s*|$)/gi;
		let m;
		do {
			m = re.exec(this);
			if (m) {
				out.push(m[0].toLowerCase().uppercaseFirst());
			}
		} while (m);
		return out.join('');
	};

String.prototype.toSpellCase =
	String.prototype.toSpellCase ||
	function () {
		return this.toLowerCase().replace(
			/(^|of )(bigby|otiluke|mordenkainen|evard|hadar|agathys|abi-dalzim|aganazzar|drawmij|leomund|maximilian|melf|nystul|otto|rary|snilloc|tasha|tenser|jim)('s|$| )/g,
			(...m) => `${m[1]}${m[2].toTitleCase()}${m[3]}`
		);
	};

String.prototype.toCamelCase =
	String.prototype.toCamelCase ||
	function () {
		return this.split(' ')
			.map((word, index) => {
				if (index === 0) return word.toLowerCase();
				return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
			})
			.join('');
	};

String.prototype.escapeQuotes =
	String.prototype.escapeQuotes ||
	function () {
		return this.replace(/'/g, `&apos;`).replace(/"/g, `&quot;`);
	};

String.prototype.qq =
	String.prototype.qq ||
	function () {
		return this.escapeQuotes();
	};

String.prototype.unescapeQuotes =
	String.prototype.unescapeQuotes ||
	function () {
		return this.replace(/&apos;/g, `'`).replace(/&quot;/g, `"`);
	};

String.prototype.uq =
	String.prototype.uq ||
	function () {
		return this.unescapeQuotes();
	};

String.prototype.encodeApos =
	String.prototype.encodeApos ||
	function () {
		return this.replace(/'/g, `%27`);
	};

/**
 * Calculates the Damerau-Levenshtein distance between two strings.
 * https://gist.github.com/IceCreamYou/8396172
 */
String.prototype.distance =
	String.prototype.distance ||
	function (target) {
		let source = this;
		let i;
		let j;
		if (!source) return target ? target.length : 0;
		else if (!target) return source.length;

		const m = source.length;
		const n = target.length;
		const INF = m + n;
		const score = new Array(m + 2);
		const sd = {};
		for (i = 0; i < m + 2; i++) score[i] = new Array(n + 2);
		score[0][0] = INF;
		for (i = 0; i <= m; i++) {
			score[i + 1][1] = i;
			score[i + 1][0] = INF;
			sd[source[i]] = 0;
		}
		for (j = 0; j <= n; j++) {
			score[1][j + 1] = j;
			score[0][j + 1] = INF;
			sd[target[j]] = 0;
		}

		for (i = 1; i <= m; i++) {
			let DB = 0;
			for (j = 1; j <= n; j++) {
				const i1 = sd[target[j - 1]];
				const j1 = DB;
				if (source[i - 1] === target[j - 1]) {
					score[i + 1][j + 1] = score[i][j];
					DB = j;
				} else {
					score[i + 1][j + 1] =
						Math.min(score[i][j], Math.min(score[i + 1][j], score[i][j + 1])) + 1;
				}
				score[i + 1][j + 1] = Math.min(
					score[i + 1][j + 1],
					score[i1] ? score[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1) : Infinity
				);
			}
			sd[source[i - 1]] = i;
		}
		return score[m + 1][n + 1];
	};

String.prototype.isNumeric =
	String.prototype.isNumeric ||
	function () {
		return !isNaN(parseFloat(this)) && isFinite(this);
	};

String.prototype.last =
	String.prototype.last ||
	function () {
		return this[this.length - 1];
	};

String.prototype.escapeRegexp =
	String.prototype.escapeRegexp ||
	function () {
		return this.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
	};

String.prototype.toUrlified =
	String.prototype.toUrlified ||
	function () {
		return encodeURIComponent(this.toLowerCase()).toLowerCase();
	};

String.prototype.toChunks =
	String.prototype.toChunks ||
	function (size) {
		// https://stackoverflow.com/a/29202760/5987433
		const numChunks = Math.ceil(this.length / size);
		const chunks = new Array(numChunks);
		for (let i = 0, o = 0; i < numChunks; ++i, o += size) chunks[i] = this.substr(o, size);
		return chunks;
	};

String.prototype.toAscii =
	String.prototype.toAscii ||
	function () {
		return this.normalize('NFD') // replace diacritics with their individual graphemes
			.replace(/[\u0300-\u036f]/g, '') // remove accent graphemes
			.replace(/Æ/g, 'AE')
			.replace(/æ/g, 'ae');
	};

String.prototype.trimChar =
	String.prototype.trimChar ||
	function (ch) {
		let start = 0;
		let end = this.length;
		while (start < end && this[start] === ch) ++start;
		while (end > start && this[end - 1] === ch) --end;
		return start > 0 || end < this.length ? this.substring(start, end) : this;
	};

String.prototype.trimAnyChar =
	String.prototype.trimAnyChar ||
	function (chars) {
		let start = 0;
		let end = this.length;
		while (start < end && chars.indexOf(this[start]) >= 0) ++start;
		while (end > start && chars.indexOf(this[end - 1]) >= 0) --end;
		return start > 0 || end < this.length ? this.substring(start, end) : this;
	};

let StrUtil = {
	COMMAS_NOT_IN_PARENTHESES_REGEX: /,\s?(?![^(]*\))/g,
	COMMA_SPACE_NOT_IN_PARENTHESES_REGEX: /, (?![^(]*\))/g,

	uppercaseFirst: function (string) {
		return string.uppercaseFirst();
	},
	// Certain minor words should be left lowercase unless they are the first or last words in the string
	TITLE_LOWER_WORDS: [
		'a',
		'an',
		'the',
		'and',
		'but',
		'or',
		'for',
		'nor',
		'as',
		'at',
		'by',
		'for',
		'from',
		'in',
		'into',
		'near',
		'of',
		'on',
		'onto',
		'to',
		'with',
		'over'
	],
	// Certain words such as initialisms or acronyms should be left uppercase
	TITLE_UPPER_WORDS: ['Id', 'Tv', 'Dm', 'Ok'],

	padNumber: (n, len, padder) => {
		return String(n).padStart(len, padder);
	},

	elipsisTruncate(str, atLeastPre = 5, atLeastSuff = 0, maxLen = 20) {
		if (maxLen >= str.length) return str;

		maxLen = Math.max(atLeastPre + atLeastSuff + 3, maxLen);
		let out = '';
		let remain = maxLen - (3 + atLeastPre + atLeastSuff);
		for (let i = 0; i < str.length - atLeastSuff; ++i) {
			const c = str[i];
			if (i < atLeastPre) out += c;
			else if (remain-- > 0) out += c;
		}
		if (remain < 0) out += '...';
		out += str.substring(str.length - atLeastSuff, str.length);
		return out;
	},

	toTitleCase(str) {
		return str.toTitleCase();
	},

	getNamePart(str) {
		if (typeof str !== 'string') return str;
		return str
			.split(' ')
			.filter((it) => !StrUtil.TITLE_LOWER_WORDS.includes(it.toLowerCase()))
			.join(' ');
	}
};
//#endregion
