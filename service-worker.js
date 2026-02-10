const CACHE_NAME = "cagr-app-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./icon.png"
];

// Install event (cache files)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch event (offline mode)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
