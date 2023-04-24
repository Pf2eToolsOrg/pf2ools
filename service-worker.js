const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.5ad4c7ac.js",
  a + "/_app/immutable/chunks/0.f0930654.js",
  a + "/_app/immutable/chunks/1.67234b67.js",
  a + "/_app/immutable/chunks/2.de758367.js",
  a + "/_app/immutable/chunks/3.02d19520.js",
  a + "/_app/immutable/assets/ProgressBar.4f1e9ba5.css",
  a + "/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.daa0fa4c.js",
  a + "/_app/immutable/chunks/index.a70da5a2.js",
  a + "/_app/immutable/chunks/index.e03c40d8.js",
  a + "/_app/immutable/chunks/singletons.15b7aa0f.js",
  a + "/_app/immutable/chunks/stores.eb0a1b4e.js",
  a + "/_app/immutable/entry/start.7689a818.js",
  a + "/_app/immutable/entry/error.svelte.118e1a5f.js",
  a + "/_app/immutable/assets/_layout.b1486cbb.css",
  a + "/_app/immutable/entry/_layout.svelte.30362747.js",
  a + "/_app/immutable/entry/_page.svelte.a8cc7ed7.js",
  a + "/_app/immutable/entry/licenses-page.svelte.d9b2ffd7.js"
], u = [
  a + "/data/.git",
  a + "/data/.gitignore",
  a + "/data/CUP.license",
  a + "/data/LICENSE",
  a + "/data/README.md",
  a + "/data/core/sources.json",
  a + "/fonts/Quicksand.ttf",
  a + "/icons/Background.svg",
  a + "/icons/NoBackground.svg",
  a + "/icons/safari-pinned-tab.svg"
], r = "1682366730921", i = `cache-${r}`, l = [
  ...p,
  // the app itself
  ...u.filter((e) => !e.startsWith("/data"))
  // everything in `static` but the actual data
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(i)).addAll(l);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(e.request.url), n = await caches.open(i);
    if (l.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && n.put(e.request, c.clone()), c;
    } catch {
      return n.match(e.request);
    }
  }
  e.respondWith(t());
});
