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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","643d105de977390d06858941aa75f277"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","1b06f58adffa7b2156b7d3a910f07415"],["/2015/11/14/Digital-Marketing-Advice/index.html","61d964218cf44cf4df2a9a33b74a4903"],["/2015/11/15/Making-The-Transition-Part2/index.html","1f56d181dd29536a20b4e92747f6b8fe"],["/2015/11/16/Making-The-Transition-Part3/index.html","35de41af1f0d399e4f1a8a31e4e8badd"],["/2015/11/29/Jealous-Females/index.html","825af84fecc682ebd459eb4c5b8fb29d"],["/2015/11/30/Messy-Hair/index.html","4a8bf0b7407277d7d099d37b82f1d720"],["/2016/01/23/Oscars-So-White/index.html","ab0f7477d247fabf2e1d8b547f984bc9"],["/2016/02/02/Family-Tree/index.html","e81555c5de12ebe141509ca02c5d3b3d"],["/2016/03/17/Be-A-Mentor/index.html","ca91d7473dd26a502d2c5ee291d46bf3"],["/2016/04/09/Empowerhacking-A-Story/index.html","009e756e96c1ca701ce343bfba54ae53"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","cb65ef23338008e1e9339fbbcd877b99"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","0a52b77841fc25a9d7be25457bc3cd41"],["/2016/04/27/How-To-Blog-With-WHFNP/index.html","9ee28468f0016b8a85b046d3381b662d"],["/2016/05/26/Urban-Exposure/index.html","e2e6b90527616f41991ebbeb2f430785"],["/2016/11/02/PWA/index.html","b83863248c39983a57648f55cb6f7e18"],["/2016/12/31/Goals/index.html","c483ccf5050dd9b0bba0eba9d39a4fa8"],["/2017/02/20/Playing-with-GSAP/index.html","8930acfce5d1bec2b6f3675307106b71"],["/archives/2015/11/index.html","07a880fb942f15b06601f4b6d9308fd2"],["/archives/2015/11/page/2/index.html","f07c6e0291e85743c25779bc06cd2384"],["/archives/2015/index.html","5be184736e090c3250b0ff9c30737905"],["/archives/2015/page/2/index.html","99f084c85b5eb356900edf5f0b741b45"],["/archives/2016/01/index.html","686cc18e9f73dc482a96b62698c6bd48"],["/archives/2016/02/index.html","721e281af68e7e256be774ec66ad98be"],["/archives/2016/03/index.html","c33e570fed56dd11f3be43ba27b93726"],["/archives/2016/04/index.html","ad88ad9d2d6a8f8b867cddc3bea9ad63"],["/archives/2016/05/index.html","0574be5b8a8294e82ab47879df35ad66"],["/archives/2016/11/index.html","0e86daf93d3ddf28ac6623ea4915747b"],["/archives/2016/12/index.html","1a06e554dfc93ed69914e0337025c269"],["/archives/2016/index.html","4bd5871072cab834c4994c2c6126c50e"],["/archives/2016/page/2/index.html","842508abb40501e876c531e7e93da544"],["/archives/2017/02/index.html","cfc16e6815059c3401457dc8aca6f503"],["/archives/2017/index.html","64179b23c44c29ff7af29730a6c94596"],["/archives/index.html","a0e4e0d12809455722fccee2052379f3"],["/archives/page/2/index.html","085490749b95416a3462c060a4c48afd"],["/archives/page/3/index.html","085490749b95416a3462c060a4c48afd"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","c5e3f77ab0bfa5d4d6308ab6270c8dd4"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","1f433273df0eae72a831c86dcdf86a28"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","4ff2ff941d406f4695d35e1566ea1330"],["/page/3/index.html","12c40909c97a11e722d0d6003076b3a2"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","b8d1c910dc8f079c6244e4f966d8d9b0"],["/sass/ie9.css","ec4ce30949f5179ea71a203331381c90"],["/sass/main.css","18ab04be2437464dd623cadfc89d38fb"],["/tags/SVG-Animation/index.html","a1e03c5369bc3cbd84c683908c6d1d17"]];
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







