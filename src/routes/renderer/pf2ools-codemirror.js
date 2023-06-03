import { MatchDecorator, ViewPlugin, Decoration } from "@codemirror/view";
import { getValidColor } from "$lib/Renderer/Tags/Formatting/color.svelte";
// import { tags } from "$lib/Renderer/TagRenderer";

let decorator = new MatchDecorator({
	regexp: /\{@(?<tag>\w+)(?<contents>.+?)\}/g,
	decoration: (match) => {
		let tag = "";
		let attributes = { style: "" };
		switch (match.groups.tag) {
			case "i":
			case "italic":
				tag = "italic";
				break;
			case "b":
			case "bold":
				tag = "bold";
				break;
			case "u":
			case "underline":
				tag = "underline";
				break;
			case "s":
			case "strike":
				tag = "line-through";
				break;
		}

		return Decoration.mark({ class: `renderTag ${tag}`, attributes });
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
