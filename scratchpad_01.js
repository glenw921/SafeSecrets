const CACHE_NAME = 'offline-cache';
const OFFLINE_URLS = [
    'index.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(OFFLINE_URLS))
            .then(self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Serve cached content if available
                if (response) {
                    return response;
                }
                // Fetch from network if not cached
                return fetch(event.request).catch(() => {
                    // If network fetch fails, serve the cached index.html
                    if (event.request.mode === 'navigate') {
                        return caches.match('index.html');
                    }
                });
            })
    );
});
