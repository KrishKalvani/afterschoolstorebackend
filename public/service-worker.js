//we do this to know how to cache it
var cacheName = 'AS-CW3';
var cacheFiles = [
    'index.html',
    '/src/main.js',
    '/favicon.ico',
    'afterschoolstorebackend.webmanifest',
    'advancedEnglish.jpg',
    'advancedMath.png',
    'bioIcon.png',
    'chemistryIcon.png',
    'cw1logo.png',
    'icon-store-512.png',
    'engIcon.png',
    'MathIcon.jpg',
    'MicroBio.png',
    'musicIcon.png',
    'organicChem.png',
    'physIcon.png'

]

//actually adding to the cache here
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) =>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});


//helps to work the app offline, here we are returning our file, if its therem otherwise if not, it will fetch the file from third party sources.
self.addEventListener('fetch', function (e){
    e.respondWith(
        caches.match(e.request).then(function (r){
            return r || fetch(e.request).then(function(response){
                return caches.open(cacheName).then(function (cache){
                    cache.put(e.request, response.clone());
                    return response;
                })
            })
        })
    )
})
