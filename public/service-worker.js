const CACHE_NAME = 'MANUAL_CACHE';

const CACHE_REGEX = /.+\.(png|js|svg|jpg|jpeg)$/i;

function cacheFetch(event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function (res) {
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    }),
  );
}

self.addEventListener('fetch', function (event) {
  if (CACHE_REGEX.test(event.request.url)) {
    cacheFetch(event);
  }
});
