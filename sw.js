importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/m/bai-wao-paawa.jpg",
    "revision": "ce40c5a02d22f72be7596b15fe4476bf"
  },
  {
    "url": "assets/m/bokobokoin-daap.jpg",
    "revision": "cca060e10f367ea72f9298b66edc36df"
  },
  {
    "url": "assets/m/dadabwao-wako-danaa.jpg",
    "revision": "6139a5fba281552b080600cb44065701"
  },
  {
    "url": "assets/m/locust-creek.jpg",
    "revision": "599c709d4481081863e3896bc9c8d0cb"
  },
  {
    "url": "assets/m/lucas-creek.jpg",
    "revision": "93bf276b77def6eb3dddb71325da47a3"
  },
  {
    "url": "assets/m/marudi-ground-sluice.jpg",
    "revision": "aa86c83205e29f17ad95ce36a96e55c4"
  },
  {
    "url": "assets/m/mazao-mountain.jpg",
    "revision": "c984a5da2e68a72c70d4f37cb857907f"
  },
  {
    "url": "assets/m/riiwao.jpg",
    "revision": "4e2a2974b3e302f7f40748c381c8e2cd"
  },
  {
    "url": "assets/m/rupununi-turtle-eggs.jpg",
    "revision": "df363c4361706a4fb02ba11ecea9753d"
  },
  {
    "url": "assets/m/sowan-wao-1.jpg",
    "revision": "ae113f57cb58f3859ca810aadbd30f41"
  },
  {
    "url": "assets/m/sowan-wao-2.jpg",
    "revision": "bbd771aa703618e718efef1022850041"
  },
  {
    "url": "assets/m/tucan-creek.jpg",
    "revision": "e2a4cc23923650bf5369a1f3f1dc9f56"
  },
  {
    "url": "assets/m/wakoda-naawa.jpg",
    "revision": "494bf88b45d2a871952d777e2c543bca"
  },
  {
    "url": "assets/missing.png",
    "revision": "800722b9efdb5139767fb02f9b7f7527"
  },
  {
    "url": "assets/s/bai-wao-paawa.jpg",
    "revision": "aec4e1d63486910a2807e91a37724541"
  },
  {
    "url": "assets/s/bokobokoin-daap.jpg",
    "revision": "64d91e9763ed3dd71ec1347836acb17a"
  },
  {
    "url": "assets/s/dadabwao-wako-danaa.jpg",
    "revision": "45412259513d3cde3197795e57dea1ba"
  },
  {
    "url": "assets/s/locust-creek.jpg",
    "revision": "049d74b1dcc706dbc8dd825a535462a1"
  },
  {
    "url": "assets/s/lucas-creek.jpg",
    "revision": "9b5c6f9559565909f34980c465b21ec7"
  },
  {
    "url": "assets/s/marudi-ground-sluice.jpg",
    "revision": "85da92b84032c33579251b42c17ae070"
  },
  {
    "url": "assets/s/mazao-mountain.jpg",
    "revision": "d11f84c15056c59bbb50c344dce8ca4c"
  },
  {
    "url": "assets/s/riiwao.jpg",
    "revision": "0aacf67d4c8596c9f61ded9c2fd14363"
  },
  {
    "url": "assets/s/rupununi-turtle-eggs.jpg",
    "revision": "7e70c25b83c1f8f2841a6ddf427dbe61"
  },
  {
    "url": "assets/s/sowan-wao-1.jpg",
    "revision": "4c284d71caf03f5beb89f10452dce27a"
  },
  {
    "url": "assets/s/sowan-wao-2.jpg",
    "revision": "9848b5f514f4c230036d15293826e9f4"
  },
  {
    "url": "assets/s/tucan-creek.jpg",
    "revision": "0535367b128d274518f6a4c1ef41c6da"
  },
  {
    "url": "assets/s/wakoda-naawa.jpg",
    "revision": "31e3e73b97a12a9a0c696711e0ee6ec4"
  },
  {
    "url": "bundle.css",
    "revision": "fbcbefc37ecb433dd086bfbc255f3ac6"
  },
  {
    "url": "bundle.es2015.js",
    "revision": "ae93eee412faa6c00cd2f95433c724f0"
  },
  {
    "url": "bundle.js",
    "revision": "0b2045287191db1660211bbca4b5e4c8"
  },
  {
    "url": "data.json",
    "revision": "7b3d6f231c1928a6e0ced7964876e480"
  },
  {
    "url": "index.html",
    "revision": "353660625474c81b27fdf543344aaa92"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/api\.mapbox\.com|https:\/\/[abcd]\.tiles\.mapbox\.com|https:\/\/ecn\.t\d\.tiles\.virtualearth\.net/, workboxSW.strategies.staleWhileRevalidate({
  "cacheName": "map-cache",
  "cacheableResponse": {
    "statuses": [
      0,
      200
    ]
  }
}), 'GET');
