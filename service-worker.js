self.addEventListener("install", (event) => {
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
        "about.html",
        "contact.html",
        "support.html",
        "Logo-main.png",
        // add more files if needed
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});