import { MatchDecorator, ViewPlugin, Decoration } from "@codemirror/view";
// import { tags } from "$lib/Renderer/TagRenderer";

let worldDeco = Decoration.mark({ class: "world" }); // This adds a className to the text that matches the regex.
let decorator = new MatchDecorator({
    regexp: /\{@(?<tag>\w+)(?<contents>.+?)\}/g,
    decoration: (match, view, pos) => {
        // TODO:
        return worldDeco
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
        decorations: (v) => v.decorations
    }
);