import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	optimizeDeps: {
		exclude: ["codemirror", "@codemirror/json"],
	},
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "404.html", // Github Pages, change it to index.html or 200.html on other hosting providers
			strict: true,
		}),
		alias: {
			Storage: "./src/lib/Data/Storage.js",
			$data: "./src/data/core",
			tagger: "./src/lib/Renderer/Tagger.svelte",
			renderer: "./src/lib/Renderer/Renderer.svelte",
		},
	},
};
