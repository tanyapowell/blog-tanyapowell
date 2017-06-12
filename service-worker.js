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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","1abbb61acbb4de0f4cb3b07df0fcf6ac"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","b2a8906d54f772315102f7ce77b8a845"],["/2015/11/14/Digital-Marketing-Advice/index.html","8d87d77815e53097123cbb79f7f448cd"],["/2015/11/15/Making-The-Transition-Part2/index.html","f786462fbdb2eb65c97f6aee8bb95b44"],["/2015/11/16/Making-The-Transition-Part3/index.html","e011bc3eb04fe69590192e7902857418"],["/2015/11/29/Jealous-Females/index.html","2d5c4ad485062353813032296f4c0fae"],["/2015/11/30/Messy-Hair/index.html","17d7b2d7ef70af16ab2609c4de95e398"],["/2016/01/23/Oscars-So-White/index.html","700fef4f60e32a0b7d32d4238037db4f"],["/2016/02/02/Family-Tree/index.html","7904d6b580e5d899b64407a37d321237"],["/2016/03/17/Be-A-Mentor/index.html","caa23a02b048d485298cedfc298bbf77"],["/2016/04/09/Empowerhacking-A-Story/index.html","bbef237d96df565f4d019c37ccff26e9"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","e73785917798bce9a03a951382557933"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","8a493bff9d33168fae97c51150c098f0"],["/2016/05/26/Urban-Exposure/index.html","a4fe3a73cbbb5583f13fa604ce96e3cf"],["/2016/11/02/PWA/index.html","093c7a99d556ba2a8464381b905825d1"],["/2016/12/31/Goals/index.html","e8db6138fb7c9a7376cad7f98f4cb83b"],["/2017/02/20/Playing-with-GSAP/index.html","745491482c23a5730684f8bf3c567067"],["/2017/06/10/Back-To-Basics/index.html","0775d4546b8ad818e3ea5d5d4129b64b"],["/2017/06/11/Javascript-30/index.html","82fcb849e17dbed28d77b38b43cba3aa"],["/archives/2015/11/index.html","9fc8418a0dee02f9bdbdfb457eaa1f90"],["/archives/2015/11/page/2/index.html","fd0fa87a8323ae863355c12debc624bf"],["/archives/2015/index.html","159753e61d43be4aa835b787264702a3"],["/archives/2015/page/2/index.html","47d2e351337bec96f8f5b7ca7cd3e0f1"],["/archives/2016/01/index.html","1caf4667755c86f0baf8951d84b037f9"],["/archives/2016/02/index.html","785a50385b56f33bb2409592f9d7f846"],["/archives/2016/03/index.html","d61c1ac9bd24b7ab1d6833c90576a346"],["/archives/2016/04/index.html","d02196725fc35ee9b62ec1a95090158b"],["/archives/2016/05/index.html","25523b2aa4297db4124217be6896dd06"],["/archives/2016/11/index.html","a538b6fad6f0439025b80d8e7aa1775d"],["/archives/2016/12/index.html","4a1772d3d365a1557ffe61f1587074e5"],["/archives/2016/index.html","dd3d0eed22801c23230fbbbfb2636584"],["/archives/2016/page/2/index.html","9bc43976bc3409851798bbb41a28bdf4"],["/archives/2017/02/index.html","bbea772f1b1648d1732eb8164a2eb326"],["/archives/2017/06/index.html","ec3613dd70bda57a9323539766e206fb"],["/archives/2017/index.html","a6155cadd44383bcd959a0d9df17f781"],["/archives/index.html","37f39162c9aa666ad36e3be22332c200"],["/archives/page/2/index.html","2d79df0f247943283aac4c07dd37d6d7"],["/archives/page/3/index.html","2d79df0f247943283aac4c07dd37d6d7"],["/archives/page/4/index.html","2d79df0f247943283aac4c07dd37d6d7"],["/categories/Black-Girl-Magic/index.html","aaab33c635d1e98f7255b9877e271a65"],["/categories/Technology/index.html","639a1bfdedf43bf15d7fc8847fba859d"],["/categories/Technology/page/2/index.html","a54a59d9a9d4095235f78d86304982f2"],["/categories/Technology/page/3/index.html","a54a59d9a9d4095235f78d86304982f2"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","19d22e91aa6a388e14b91bf1513d2b1d"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","095bf10897ed51e85e45f18a8a3fc11c"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","2915bba2542bea628bc55c7d6f24a06e"],["/page/3/index.html","e62699c6dcc01e2cc468c6231e9baa3b"],["/page/4/index.html","3b01c8f0850475854fc0f2eb668e5fa7"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","0bc177458343cdd11748700c3fb48aeb"],["/sass/ie9.css","27ce79205ec323be9eb06f1be1da307c"],["/sass/main.css","6de1f6afdcf854cb8281e5c0ac3efa35"],["/tags/Black-girl-magic-Hair/index.html","dc4c136c7b11f59359f084658190eeed"],["/tags/Black-girl-magic/index.html","8812aaaa7681e8547a736111a161e71a"],["/tags/Career-Technology/index.html","9a4414c29a0fa87c6e338654da07b543"],["/tags/CodePen-Javascript/index.html","e74e0bbd80899a9f29fd1d604983fe17"],["/tags/Fashion-Technology/index.html","b1ec6b4b62011bc7620ebbe96d3fc08f"],["/tags/Mentoring-Technology-Hackathon/index.html","0cb7d4ac7514e4c15ed6086cd0163592"],["/tags/SVG-Animation-Technology/index.html","bc12681d5290466e645083df4a99cf38"],["/tags/Technology-Goals/index.html","61b7107e5cd8e57622bb430cdcd8a9cf"],["/tags/Technology-Hackathon/index.html","051f4a9b478400c163c813cacb135bc3"],["/tags/Technology-Javascript/index.html","fb4b43274a2690593d7534daf660d0ce"],["/tags/Technology-Marketing/index.html","4970cb675ed7ceaea1e46126e96d9fde"],["/tags/Technology-Offline-Web-Apps-Future/index.html","b2aef38914da626801345882d21b9249"],["/tags/Technology-Tech-while-Black/index.html","3263419005651c06ea5176cff8183bcf"]];
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







