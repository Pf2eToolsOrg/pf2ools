import { MatchDecorator, ViewPlugin, Decoration } from "@codemirror/view";
import * as tags from "$lib/Renderer/Tags/index.js";

// \\b(${Object.keys(tags).sort((a, b) => b.length - a.length).join("|")})\\b

let decorator = new MatchDecorator({
	regexp: new RegExp(`{@(\\w+).+?}`, "g"),
	decoration: (match) => {
		let tag = match[1];

		if (!tags[tag]) return Decoration.mark({ class: `renderTag-wrong` });

		let css = "";
		let attributes = { style: "" };
		switch (tag) {
			case "i":
			case "italic":
				css = "italic";
				break;
			case "b":
			case "bold":
				css = "font-bold";
				break;
			case "u":
			case "underline":
				css = "underline";
				break;
			case "s":
			case "strike":
				css = "line-through";
				break;
		}

		return Decoration.mark({ class: `renderTag ${css}`, attributes });
	},
});

export const pf2oolsPlugin = ViewPlugin.define(
	(view) => ({
		decorations: decorator.createDeco(view),
		update(u) {
			this.decorations = decorator.updateDeco(u, this.decorations);
		},
	}),
	{
		decorations: (v) => v.decorations,
	}
);
