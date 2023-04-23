// const URLS = ['./index.html', './src/app.tsx', '/src/main.tsx'];
const PROD_URLS = ['/assets/index.000cbaf8.css', 'assets/js/index-ce257c2b.js']
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
  console.log('install')
  // event.waitUntil(
  //   caches
  //     .open(CACHE_NAME)
  //     .then(cache => {
  //       return cache.addAll(PROD_URLS)
  //     })
  //     .catch(err => {
  //       throw err
  //     })
  // )
})

self.addEventListener('activate', event => {
  console.log('activate')
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
  console.log('fetch')
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request)
    })
    // caches
    //   .open(CACHE_NAME)
    //   .then(cache => {
    //     return cache.addAll(PROD_URLS)
    //   })
    //   .catch(err => {
    //     throw err
    //   })
  )
})
