const URLS = ['/index.html', '/src/app.tsx', '/src/main.tsx']
const CACHE_NAME = '2048-cache-v1'
const tryNetwork = (req, timeout) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout)
    fetch(req).then(res => {
      clearTimeout(timeoutId)
      const responseClone = res.clone()
      caches.open(CACHE_NAME).then(cache => {
        cache.put(req, responseClone)
      })
      resolve(res)
    }, reject)
  })
}
const getFromCache = req => {
  console.log('network is off so getting from cache...')
  return caches.open(CACHE_NAME).then(cache => {
    return cache.match(req).then(result => {
      return result || Promise.reject('no-match')
    })
  })
}
self.addEventListener('install', async event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS)
      })
      .catch(err => {
        throw err
      })
  )
})
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    })
  )
})
self.addEventListener('fetch', event => {
  event.respondWith(
    tryNetwork(event.request, 2000).catch(() => getFromCache(event.request))
  )
})
