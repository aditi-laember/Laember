self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("la-ember-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "music.html",
        "dance.html",
        "writes.html",
        "acting.html",
        "fashion.html",
        "modeling.html",
        "kpop.html",
        "about me.html",
        "support.html",
        "contact.html",
        "Official logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() =>
        caches.match("index.html")
      );
    })
  );
});
