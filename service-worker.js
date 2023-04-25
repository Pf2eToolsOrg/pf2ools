const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  t + "/_app/immutable/entry/app.ab24908b.js",
  t + "/_app/immutable/chunks/0.dbf85910.js",
  t + "/_app/immutable/chunks/1.ad8b09e0.js",
  t + "/_app/immutable/chunks/2.b2fcb3d9.js",
  t + "/_app/immutable/chunks/3.18cbddd3.js",
  t + "/_app/immutable/assets/ProgressBar.4f1e9ba5.css",
  t + "/_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ec6fbd8a.js",
  t + "/_app/immutable/chunks/index.363b4140.js",
  t + "/_app/immutable/chunks/index.69e6a8df.js",
  t + "/_app/immutable/chunks/singletons.d81da144.js",
  t + "/_app/immutable/chunks/stores.f87cf697.js",
  t + "/_app/immutable/entry/start.abe5a241.js",
  t + "/_app/immutable/entry/error.svelte.2a337d02.js",
  t + "/_app/immutable/assets/_layout.847b8748.css",
  t + "/_app/immutable/entry/_layout.svelte.b520a797.js",
  t + "/_app/immutable/entry/_page.svelte.c2d11e1c.js",
  t + "/_app/immutable/entry/licenses-page.svelte.4078efb3.js"
], r = [
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
], d = "1682443725608", o = `cache-${d}`, i = [
  ...l,
  // the app itself
  ...r.filter((a) => !a.startsWith("/data"))
  // everything in `static` but the actual data
];
self.addEventListener("install", (a) => {
  async function e() {
    await (await caches.open(o)).addAll(i);
  }
  a.waitUntil(e());
});
self.addEventListener("activate", (a) => {
  async function e() {
    for (const s of await caches.keys())
      s !== o && await caches.delete(s);
  }
  a.waitUntil(e());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function e() {
    const s = new URL(a.request.url), n = await caches.open(o);
    if (i.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(e());
});
