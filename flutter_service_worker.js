'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cb482288e86145f690b9cd303dea39d5",
"assets/AssetManifest.bin.json": "4216dd61188a3fadcbf5bbedb0e8565e",
"assets/AssetManifest.json": "aded0e690c4371439ca6cdfe662ad5d9",
"assets/assets/logo.jpg": "e5028615747517e59bffc9fe7ea2dbf5",
"assets/assets/owl3.png": "3535ded9124725288a1dd1b6fa87199f",
"assets/assets/personal/profile2.png": "2ad6af9e20ba9ccb6782fb46d58b854f",
"assets/assets/personal/profile3.png": "ed440028a571c557b2b6149bd18ec863",
"assets/assets/personal/profile4.png": "d5c97e363cc0b8949f2f43bc326281ba",
"assets/assets/personal/profile5.png": "398292e15b0288ac7ea965c50138fe19",
"assets/assets/personal/profile6.png": "c29ac8d39b4d104afb6b5f66025a0ed9",
"assets/assets/personal/profile7.png": "0e79e65874fdee12541fbba8c2d7cfed",
"assets/assets/projects/project.jpg": "039d10ac97bd15505ccb6ee84c97ab54",
"assets/assets/projects/project1.jpg": "ab2736500b04fdba7fad18d535c30541",
"assets/assets/projects/project2.jpg": "78a1db5b711a8466135d6619f1aeca7e",
"assets/assets/projects/project3.jpg": "1aaebc1bb045a5c018c087235d3235e7",
"assets/assets/projects/project4.jpg": "7612b9033b24e9f0a17aa55822bba889",
"assets/assets/skills/android.png": "d2123822fb2153ca36d9011aab6249bc",
"assets/assets/skills/c.png": "4ffb8d1f8296467ba6dad05136c699d1",
"assets/assets/skills/cpp.png": "c1c5353e8ce476277f0350ff2771b423",
"assets/assets/skills/dart.png": "a8894c189a2795debee21fd0e6d4b24c",
"assets/assets/skills/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/skills/flutter.png": "f78d11c9cda36c52917f4794d09f10d9",
"assets/assets/skills/git.png": "59863c6180caa67a7d0c00e13727a828",
"assets/assets/skills/hive.png": "e7b2ff5773a10b36a5f771c39e813c32",
"assets/assets/skills/java.png": "f10a49f95ad7e68dd3af313f7cc9d2aa",
"assets/assets/skills/kotlin.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/skills/matplotlin.png": "7302595bfa6abaee827c9b54a66845d1",
"assets/assets/skills/mysql.png": "754e01e49836a295574661a188161775",
"assets/assets/skills/pandas.png": "fa639f511a74649b8f9d21e2c73d2950",
"assets/assets/skills/python.png": "b32ab39f0e0ec0ee211e7d5871a85b25",
"assets/assets/skills/scikitlearn.png": "f0f50003d0e332fe8232c3d685b6b221",
"assets/assets/skills/seaborn.png": "05758292c721735dedd051ff370de10f",
"assets/assets/skills/sqlite.png": "863fb8380d7c2edbc9f08cab22323696",
"assets/assets/socialmedia/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/socialmedia/instagram.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/assets/socialmedia/linkedin.png": "dda499d8edb884a5bab16b08c2a716cd",
"assets/assets/socialmedia/medium.png": "f45579fedeec0e2dbb145c4304993ee8",
"assets/assets/socialmedia/twitter.png": "d716d19e74032fb2f7fbaf01f6b02b95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89f957e47f77c273211fa84fb4fa7520",
"assets/NOTICES": "6a97eac29483e5fed4bd80a995020186",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8d7e167964a97e14a588f051e2d9e00b",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "adfc4f671e2899c1a2c1345883c6dc06",
"icons/android-chrome-512x512.png": "58411a1c465970df2f8c44557cd84953",
"icons/apple-touch-icon.png": "9181970ac5ebfbecff12987f43c85e0c",
"index.html": "3f1cbcb4382fbe20cb2db387f425ccd3",
"/": "3f1cbcb4382fbe20cb2db387f425ccd3",
"logo.png": "adfc4f671e2899c1a2c1345883c6dc06",
"main.dart.js": "cdd6987870bdd1a8036b45683c55336b",
"manifest.json": "882a2213493df54f5d7223716c841e33",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
