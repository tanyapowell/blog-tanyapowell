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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","8462d9a4f2b6cb078648bca497410c87"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","01b589b4125ec373d775c7abc8ee4fab"],["/2015/11/14/Digital-Marketing-Advice/index.html","2b7ed4a90176985b25db993666b342b4"],["/2015/11/15/Making-The-Transition-Part2/index.html","d93986b37671589fe4d7d2440a79446f"],["/2015/11/16/Making-The-Transition-Part3/index.html","ba923f086631940f02ae67eb667b33b2"],["/2015/11/29/Jealous-Females/index.html","dc911fce6e06367166dbfa91a0e42632"],["/2015/11/30/Messy-Hair/index.html","b0e9723a063a7c98d2a69909ce7b3f38"],["/2016/01/23/Oscars-So-White/index.html","e189d76726b7e3b38a6c09c40530c1a0"],["/2016/02/02/Family-Tree/index.html","9bea38fb4b3cd66d9296a852ef123d2d"],["/2016/03/17/Be-A-Mentor/index.html","e4a47f4091cf62397bc51c2dc6871562"],["/2016/04/09/Empowerhacking-A-Story/index.html","60d26c541edcdb8db986d02394340c38"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","65812e15923948e0bb91845ff8ff0287"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","97eb02fa813b3a7f5cac05d3b550bf7b"],["/2016/04/27/How-To-Blog-With-WHFNP/index.html","f73055c479ff53f05b35509f29b3f6b6"],["/2016/05/26/Urban-Exposure/index.html","728af4fbe8c266018be144a99c555702"],["/2016/11/02/PWA/index.html","04d5186c39c14a68b7d348acd95422f8"],["/2016/12/31/Goals/index.html","cdd8c0c322c78af4735638149a66328f"],["/2017/02/20/Playing-with-GSAP/index.html","db40000eb37a0c873dbb49e942154bd0"],["/archives/2015/11/index.html","db44d60c188acffe459f37b306198a90"],["/archives/2015/11/page/2/index.html","e99ffdaa1fee3f27f92ed87ced9e4899"],["/archives/2015/index.html","fadff45dfb88894324e81b5286bca928"],["/archives/2015/page/2/index.html","78985d22d4b4a5b54194f7b7d593fcd3"],["/archives/2016/01/index.html","e7fab32856fbf574ac697bb115533304"],["/archives/2016/02/index.html","801448857ae3d8e50f728f7c886659df"],["/archives/2016/03/index.html","300f6cd5dbd400fbd7155c122dab5368"],["/archives/2016/04/index.html","863f78b078fb3e94d3894a4c3d54f685"],["/archives/2016/05/index.html","9e69bd7fc4239c5da0bd28a2856e108f"],["/archives/2016/11/index.html","bdd3d16579466b9292c7c030a643f603"],["/archives/2016/12/index.html","9a5951ffda7e7462f40b12d86cb2ff9a"],["/archives/2016/index.html","53bf9190f79ae051ce0104b7ff11b64b"],["/archives/2016/page/2/index.html","c61d807970233df64bed99957260fb62"],["/archives/2017/02/index.html","3f14a1d2747e828d0bedf5818ea0fbc6"],["/archives/2017/index.html","fcb31ea7f98b1b61b78e5a0431ba8cbd"],["/archives/index.html","8b036a258d6fcf9defbb3566bb42cae3"],["/archives/page/2/index.html","d5f734e89f7fa72d6fb5136d2c28748c"],["/archives/page/3/index.html","d5f734e89f7fa72d6fb5136d2c28748c"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","c5e3f77ab0bfa5d4d6308ab6270c8dd4"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","e4bb1e1af9d9310d18f043ac58157aa4"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","76ff94f53d3f6a950b5090815a639104"],["/page/3/index.html","49e0ab7c29a0d18ce14ae6aead20af52"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","b8d1c910dc8f079c6244e4f966d8d9b0"],["/sass/ie9.css","ec4ce30949f5179ea71a203331381c90"],["/sass/main.css","18ab04be2437464dd623cadfc89d38fb"],["/tags/SVG-Animation/index.html","4a7fecd2687f45109b8ae5f8f6f8d609"]];
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







