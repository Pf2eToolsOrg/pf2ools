const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  t + "/_app/immutable/entry/app.9fbfebd0.js",
  t + "/_app/immutable/chunks/0.44448528.js",
  t + "/_app/immutable/chunks/1.412a745d.js",
  t + "/_app/immutable/chunks/2.b2fcb3d9.js",
  t + "/_app/immutable/chunks/3.32d7f98c.js",
  t + "/_app/immutable/assets/ProgressBar.4f1e9ba5.css",
  t + "/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ec6fbd8a.js",
  t + "/_app/immutable/chunks/index.363b4140.js",
  t + "/_app/immutable/chunks/index.69e6a8df.js",
  t + "/_app/immutable/chunks/singletons.af903bb2.js",
  t + "/_app/immutable/chunks/stores.e4e41364.js",
  t + "/_app/immutable/entry/start.79a1f2f5.js",
  t + "/_app/immutable/entry/error.svelte.49f5b175.js",
  t + "/_app/immutable/assets/_layout.847b8748.css",
  t + "/_app/immutable/entry/_layout.svelte.b900e3b9.js",
  t + "/_app/immutable/entry/_page.svelte.c2d11e1c.js",
  t + "/_app/immutable/entry/licenses-page.svelte.490796ae.js"
], f = [
  t + "/data/.git",
  t + "/data/.gitignore",
  t + "/data/CUP.license",
  t + "/data/LICENSE",
  t + "/data/README.md",
  t + "/data/core/sources.json",
  t + "/fonts/Gin-Regular.ttf",
  t + "/fonts/Pathfinder2eActions.ttf",
  t + "/fonts/Quicksand.ttf",
  t + "/fonts/Roboto-regular.ttf",
  t + "/fonts/Sabon-Bold.ttf",
  t + "/fonts/Sabon-BoldItalic.ttf",
  t + "/fonts/Sabon-Italic.ttf",
  t + "/fonts/Sabon-Roman.ttf",
  t + "/fonts/SabonLTStd-Bold.ttf",
  t + "/fonts/SabonLTStd-BoldItalic.ttf",
  t + "/fonts/SabonLTStd-Italic.ttf",
  t + "/fonts/SabonLTStd-Roman.ttf",
  t + "/fonts/Taroca.ttf",
  t + "/icons/Background.svg",
  t + "/icons/NoBackground.svg",
  t + "/icons/safari-pinned-tab.svg"
], r = "1682441752900", o = `cache-${r}`, i = [
  ...l,
  // the app itself
  ...f.filter((a) => !a.startsWith("/data"))
  // everything in `static` but the actual data
];
self.addEventListener("install", (a) => {
  async function s() {
    await (await caches.open(o)).addAll(i);
  }
  a.waitUntil(s());
});
self.addEventListener("activate", (a) => {
  async function s() {
    for (const e of await caches.keys())
      e !== o && await caches.delete(e);
  }
  a.waitUntil(s());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function s() {
    const e = new URL(a.request.url), n = await caches.open(o);
    if (i.includes(e.pathname))
      return n.match(e.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(s());
});
