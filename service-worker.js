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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","e61e44defbb2e1f4b604fc09dfaf614a"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","788706bbd81af9c51b718c2a483329e2"],["/2015/11/14/Digital-Marketing-Advice/index.html","1690075538d87fd0b7addbc8bd06839e"],["/2015/11/15/Making-The-Transition-Part2/index.html","09cc65c07643410dbfd66a319da09f58"],["/2015/11/16/Making-The-Transition-Part3/index.html","6073bd961d5833bf30cf36dbbe0b9382"],["/2015/11/29/Jealous-Females/index.html","1be5d2bf1c3fc0b3b74d80df992984d7"],["/2015/11/30/Messy-Hair/index.html","8e76f6e2a29af4cb0cf6047966812fb4"],["/2016/01/23/Oscars-So-White/index.html","caaaef018443720e56aa1c9d7c178687"],["/2016/02/02/Family-Tree/index.html","0a50a6e8685c0cdaa583061b6b4699a2"],["/2016/03/17/Be-A-Mentor/index.html","f04bbe1de3ebbc02ad4fefebd4fe80bb"],["/2016/04/09/Empowerhacking-A-Story/index.html","21d3e1a3ebdd3adeb6eb1bac12136e9b"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","cd6de0e11d693ae78bb1b9534726fbaa"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","c6175e420aba7990c4ff2c2acce3ebb2"],["/2016/04/27/How-To-Blog-With-WHFNP/index.html","84ffa87ae68a287641e5d36161371fa4"],["/2016/05/26/Urban-Exposure/index.html","970178094e13f2439f95d6a799c80b7c"],["/2016/11/02/PWA/index.html","bae2cff44e29b56371c05303e0492ff0"],["/2016/12/31/Goals/index.html","13b8b45f6ac4a0882d4d5c967f10be31"],["/2017/02/20/Playing-with-GSAP/index.html","2cb91c1b602de75a8714e8592e2996be"],["/archives/2015/11/index.html","e0259883447db6b58b818346a5862df3"],["/archives/2015/11/page/2/index.html","fb7de963220742b5d138f8e670da3a7c"],["/archives/2015/index.html","8be8dfdfada1217dce489bf0d9a15db6"],["/archives/2015/page/2/index.html","bd559f09be503789cff4c323655de858"],["/archives/2016/01/index.html","e97c91063bb5a33b44c7da546b433c6b"],["/archives/2016/02/index.html","93abd55466b24e74a4c1444f1472cf26"],["/archives/2016/03/index.html","0d088b09658bfaab2fceb58b34fbb2ac"],["/archives/2016/04/index.html","5717e307a2371ab6020981e1559d02a9"],["/archives/2016/05/index.html","b965fde3419f043d15fd581336f89e22"],["/archives/2016/11/index.html","dc0dec8b7105b5f5e3f6b455395496be"],["/archives/2016/12/index.html","ce42485f085369e8d831f4614a5cd4c6"],["/archives/2016/index.html","989d398db50687b981d68449ce78a186"],["/archives/2016/page/2/index.html","8a0c858747aa43e0a7a55da9016abfab"],["/archives/2017/02/index.html","3f3973b056db05b404f5f384bdb5c601"],["/archives/2017/index.html","577e7ff43952e572c937b21cbb7f918f"],["/archives/index.html","5f41c4ef55a4d4dc9d2e1c2a3c84160c"],["/archives/page/2/index.html","bfb7282c0b715bbd65eca97766e157eb"],["/archives/page/3/index.html","bfb7282c0b715bbd65eca97766e157eb"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","c5e3f77ab0bfa5d4d6308ab6270c8dd4"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","519878a3d8ea49168b19166a983a4d7c"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","d066b995b46c76369bc53952ded88c2f"],["/page/3/index.html","7e2c238206f9429f012446ddecbf1977"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","b8d1c910dc8f079c6244e4f966d8d9b0"],["/sass/ie9.css","ec4ce30949f5179ea71a203331381c90"],["/sass/main.css","18ab04be2437464dd623cadfc89d38fb"],["/tags/SVG-Animation/index.html","7d8abb7313f1f436d7d703ca94ded5e8"]];
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







