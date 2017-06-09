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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","748e319d2fe166976f4ac11b4c63e90e"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","bf98daaf3bfe6aa1504104d46aecfe09"],["/2015/11/14/Digital-Marketing-Advice/index.html","d6ecc9b4470adc474686a43d5cd70aa7"],["/2015/11/15/Making-The-Transition-Part2/index.html","92a98a71fd2b06780de6ced573f521e8"],["/2015/11/16/Making-The-Transition-Part3/index.html","79df40a7ef9f323b8ae3a57fc6e63743"],["/2015/11/29/Jealous-Females/index.html","9c51335c8eee0c449877ef0252e38244"],["/2015/11/30/Messy-Hair/index.html","aaf85a799e5efb7ff4bdaf9ad39b2cc2"],["/2016/01/23/Oscars-So-White/index.html","94d231b8a23770672237225fd836bc3e"],["/2016/02/02/Family-Tree/index.html","4640a748838f41804c00a82656bc7817"],["/2016/03/17/Be-A-Mentor/index.html","96d84fd1af877473df0166ce4f594d30"],["/2016/04/09/Empowerhacking-A-Story/index.html","f4e729d8ae92c3782e11dd51ca39d1ed"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","10488c5130c4274a5b339f7790500c0f"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","753928d1592c98a29f559ed735e419fa"],["/2016/04/27/How-To-Blog-With-WHFNP/index.html","62f42212bd478a42877e23848cc31303"],["/2016/05/26/Urban-Exposure/index.html","2c824342f087fb0b8c66518f0dcca264"],["/2016/11/02/PWA/index.html","a845b8b591f29e30e5d71476adbd4c2f"],["/2016/12/31/Goals/index.html","d90c3ada130e66e3fa393ac7901597cf"],["/2017/02/20/Playing-with-GSAP/index.html","7f925a5ece8993d7a22378946cd80a7b"],["/archives/2015/11/index.html","29d700a2baa2ab9928a291d0abc43c77"],["/archives/2015/11/page/2/index.html","4fa7f0b5d503155af47f879c1fcb0f8a"],["/archives/2015/index.html","ba3072d9a89eccc819c995c0d7047aa7"],["/archives/2015/page/2/index.html","433eb575b0eda9641106d6dff4b5900b"],["/archives/2016/01/index.html","ffc3a88ca443a440688d42ad42b4033d"],["/archives/2016/02/index.html","2b023ba321259c2054523c65fbb6bcef"],["/archives/2016/03/index.html","7c41b8d194e3ef84803b872dec31556d"],["/archives/2016/04/index.html","ae4b562233f447c02965c3e14cc19fa6"],["/archives/2016/05/index.html","95b17ccc1ff0460a7fb2fe445d75fddc"],["/archives/2016/11/index.html","364998ff1d2b9c4f754bbed1de8e9f91"],["/archives/2016/12/index.html","51b4e2e735bfd573f6536be2eaa9c871"],["/archives/2016/index.html","bc9153a258f8c44cad217909892663a7"],["/archives/2016/page/2/index.html","9737f98555a63237faa983dceb20b9b5"],["/archives/2017/02/index.html","4cf293ca442a65fc83a57e825a82c2e7"],["/archives/2017/index.html","454ebc54e75d7923e42e723bba6a9ea8"],["/archives/index.html","7c4f983d7c6fdb7fa2332044afd521a8"],["/archives/page/2/index.html","e0cea597801306df6a766b6003583e7a"],["/archives/page/3/index.html","e0cea597801306df6a766b6003583e7a"],["/categories/Technology/index.html","e094b22d3c85b6249912788c3a57dff5"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","c5e3f77ab0bfa5d4d6308ab6270c8dd4"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","40ee411186ca36334db012b5c381ff68"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","a6e71b284fdf1978e9080cae4896b4ed"],["/page/3/index.html","c75c9eee36ffd75fabc06447f81232c5"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","b8d1c910dc8f079c6244e4f966d8d9b0"],["/sass/ie9.css","ec4ce30949f5179ea71a203331381c90"],["/sass/main.css","18ab04be2437464dd623cadfc89d38fb"],["/tags/SVG-Animation/index.html","f778e3163f0ba683a2fb84f700410ba0"]];
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







