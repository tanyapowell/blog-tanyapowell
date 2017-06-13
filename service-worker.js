/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","ef9c0878e00a3dee01b0fec08eb32c10"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","75ca74e9cea40fd54d7cb7f90412bd2e"],["/2015/11/14/Digital-Marketing-Advice/index.html","974cf2d18c294a0ea446d91509ff8e6c"],["/2015/11/15/Making-The-Transition-Part2/index.html","17ef0712aae9927b21873bd9272eda65"],["/2015/11/16/Making-The-Transition-Part3/index.html","93402a4138b2941c40b07a71ca10048c"],["/2015/11/29/Jealous-Females/index.html","d05d0c0f302645e85dc560eac99cefcb"],["/2015/11/30/Messy-Hair/index.html","4f69c7553f1f91571221d0c577f6c16c"],["/2016/01/23/Oscars-So-White/index.html","a53898edaa2f5a4625dacd0d9fc6babe"],["/2016/02/02/Family-Tree/index.html","52d44c1234923f874b49f4e77d0ff415"],["/2016/03/17/Be-A-Mentor/index.html","18e6825dce4949e500eeb5cf9cd595e6"],["/2016/04/09/Empowerhacking-A-Story/index.html","e69b3404ec5b13dde41f39b02de61a8e"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","0a91133e493d937a4e96b33aa799c60a"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","9461d4262e7775ef77226f134caad9d7"],["/2016/05/26/Urban-Exposure/index.html","7fd6783b0aa38eee61eea22c4752b684"],["/2016/11/02/PWA/index.html","82db1a19b90e3fa3b47b2c12d4d4de6e"],["/2016/12/31/Goals/index.html","22bdb13353b59b18f8c326470ad8e50f"],["/2017/02/20/Playing-with-GSAP/index.html","03cbdd186b9fda00bb6f7411ffedd7fd"],["/2017/06/10/Back-To-Basics/index.html","322ebf9b01d5f5ea14442f45d5a61913"],["/2017/06/11/Javascript-30/index.html","dba147731294d8e18e201289ff540ef3"],["/archives/2015/11/index.html","10887d79a9128a2e480a6ebc5fa42333"],["/archives/2015/11/page/2/index.html","13da2d7b31a0d157456a5d58ebf261d0"],["/archives/2015/index.html","b2f6b9841944cb022b0ec50282c0f8a8"],["/archives/2015/page/2/index.html","b7031063358c6b65b71b23cf377170bd"],["/archives/2016/01/index.html","0003e0f85ceec3c1cc65ad08b6969360"],["/archives/2016/02/index.html","40a456ff4616c3228c2c55f8316dac67"],["/archives/2016/03/index.html","4d0dbf58c3b28d38ce760484c730d996"],["/archives/2016/04/index.html","41b693bc2987ed1990a8a6fa7fdfca12"],["/archives/2016/05/index.html","98d2ba05688ee42c36651983155811f7"],["/archives/2016/11/index.html","27658ebfbaf5982461fb825e7b7d6a62"],["/archives/2016/12/index.html","ca807f1770574b3ac5ca340f318a82d4"],["/archives/2016/index.html","d34faefea9ee23596e83a2164790a71b"],["/archives/2016/page/2/index.html","7f27127d348a56fa9a324d3653bb8cbb"],["/archives/2017/02/index.html","e44088718b778163a67cce07838cecc9"],["/archives/2017/06/index.html","5eca55c014c433d454934d8e89b72b13"],["/archives/2017/index.html","21a79b48b17434f003d291ddc1a2b6f7"],["/archives/index.html","89b02e4ad5f81b3208bbd30cf63a09c7"],["/archives/page/2/index.html","d666e81a39a0b4b2b894a4d6f63c88be"],["/archives/page/3/index.html","d666e81a39a0b4b2b894a4d6f63c88be"],["/archives/page/4/index.html","d666e81a39a0b4b2b894a4d6f63c88be"],["/categories/Black-Girl-Magic/index.html","de4cf7a0410a9d1bc8c12dd21966f4a5"],["/categories/Technology/index.html","0c5f7ae2656de2eb697b96af77067af7"],["/categories/Technology/page/2/index.html","96b36e6ed71937177b4f714791201433"],["/categories/Technology/page/3/index.html","96b36e6ed71937177b4f714791201433"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","19d22e91aa6a388e14b91bf1513d2b1d"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","7d3623027c84f387086615974fa318c9"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","938820c754d88e1e6b36ecc0b900a538"],["/page/3/index.html","70e813810433e2f404d489297e8190c5"],["/page/4/index.html","4ac6eb3296529eada9fbe58dd90a4b29"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","0bc177458343cdd11748700c3fb48aeb"],["/sass/ie9.css","27ce79205ec323be9eb06f1be1da307c"],["/sass/main.css","c58f5e59d87c6cb529a1a3bc56c9281d"],["/tags/Black-girl-magic-Hair/index.html","214e4d414fb474ab65a4a27a23a3b61f"],["/tags/Black-girl-magic/index.html","7e6ec192434e622ecce8f61a5a858019"],["/tags/Career-Technology/index.html","e368c0b2199e5168a72c27fa238b5da8"],["/tags/CodePen-Javascript/index.html","2bc4d210dc5ef069266a53b75780f7e9"],["/tags/Fashion-Technology/index.html","c0d9266af011ee319fa7772efb2e4db9"],["/tags/JavaScript-Challenge/index.html","d256dfa1e60d77028fa0aa374b6abe48"],["/tags/Mentoring-Technology-Hackathon/index.html","adf0fdf75329ef4906be20b3af0c6332"],["/tags/SVG-Animation-Technology/index.html","d1fa7c304c4886524c20b72e9a644578"],["/tags/Technology-Goals/index.html","df1e38a24503cf920aa6b2558798f5be"],["/tags/Technology-Hackathon/index.html","7204a89f417d0bbc0894801e200a8851"],["/tags/Technology-Javascript/index.html","d029511f7c2ac97ea725962df98e122e"],["/tags/Technology-Marketing/index.html","76205f2091ab1b739050eea20b43d78d"],["/tags/Technology-Offline-Web-Apps-Future/index.html","aa65684db2fd4ab3c8dcd06bfa77d97e"],["/tags/Technology-Tech-while-Black/index.html","a0042876002ef899bdf8016ef9249c1b"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







