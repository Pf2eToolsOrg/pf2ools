const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.4e3e91a2.js",
  a + "/_app/immutable/chunks/0.6ed33e3c.js",
  a + "/_app/immutable/chunks/1.f151d402.js",
  a + "/_app/immutable/chunks/2.de758367.js",
  a + "/_app/immutable/chunks/3.02d19520.js",
  a + "/_app/immutable/assets/ProgressBar.4f1e9ba5.css",
  a + "/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.daa0fa4c.js",
  a + "/_app/immutable/chunks/index.a70da5a2.js",
  a + "/_app/immutable/chunks/index.e03c40d8.js",
  a + "/_app/immutable/chunks/singletons.e393533d.js",
  a + "/_app/immutable/chunks/stores.c7abcbcf.js",
  a + "/_app/immutable/entry/start.169efc99.js",
  a + "/_app/immutable/entry/error.svelte.9bbd7292.js",
  a + "/_app/immutable/assets/_layout.b1486cbb.css",
  a + "/_app/immutable/entry/_layout.svelte.a6976a14.js",
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
], r = "1682367278203", i = `cache-${r}`, l = [
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
    const s = new URL(e.request.url), c = await caches.open(i);
    if (l.includes(s.pathname))
      return c.match(s.pathname);
    try {
      const n = await fetch(e.request);
      return n.status === 200 && c.put(e.request, n.clone()), n;
    } catch {
      return c.match(e.request);
    }
  }
  e.respondWith(t());
});
