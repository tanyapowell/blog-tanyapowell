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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","12964f28e53ef340164a76e65065446e"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","ee08598d41773264e033fbb4896d14de"],["/2015/11/14/Digital-Marketing-Advice/index.html","f987da56e0f6d5e4a281a70df7c5755e"],["/2015/11/15/Making-The-Transition-Part2/index.html","c44623ac964c2da96572caba7c690faf"],["/2015/11/16/Making-The-Transition-Part3/index.html","697d4bbe0581d834b3266436dd577f9b"],["/2015/11/29/Jealous-Females/index.html","fb206e913977ffb8d1792f5db4afef27"],["/2015/11/30/Messy-Hair/index.html","a27a400a836b8846007e4cb9245dfb66"],["/2016/01/23/Oscars-So-White/index.html","6225e9197aa1e49ea25997bb5f690bb3"],["/2016/02/02/Family-Tree/index.html","94b034beb5ecb3f248699e380b37717f"],["/2016/03/17/Be-A-Mentor/index.html","004cc2dac87c9cee143732e1d582db83"],["/2016/04/09/Empowerhacking-A-Story/index.html","8900234035d55c0f1eb86e96b410d9f6"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","71286366b626ab5f1f4bf762b9f7cb95"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","55a217299bf7bff1f2a585c724cb2e83"],["/2016/05/26/Urban-Exposure/index.html","87bb639e164747ccc35c6e9f43b5d6ef"],["/2016/11/02/PWA/index.html","b6aad60e97ce06986be43b61c65416da"],["/2016/12/31/Goals/index.html","9cc676396d8db3729f00c2b70ea33be4"],["/2017/02/20/Playing-with-GSAP/index.html","61919bf18d9596d3a7c387755e9d2614"],["/archives/2015/11/index.html","2817192c40ea7676c571f2171d4e4b91"],["/archives/2015/11/page/2/index.html","b494cab954d204d5cfd3a863f6d4b4ee"],["/archives/2015/index.html","d7c32c3fafa0cf264a64dc1ee4dc3278"],["/archives/2015/page/2/index.html","4851ff81832fd2424cf5c743819a10e0"],["/archives/2016/01/index.html","068ae52c2c5e89f540d8ba8d0e6b604b"],["/archives/2016/02/index.html","39775c26ae210852d0baf971d3553cd5"],["/archives/2016/03/index.html","8b0bf8cc67681a49115a1d5c65143289"],["/archives/2016/04/index.html","f49c4df2484dffd74b25b34cfe868eec"],["/archives/2016/05/index.html","ef99151de4045c8bc9335f74db4002f9"],["/archives/2016/11/index.html","c8ec5ddcc7321105c79d84987ee5e9a9"],["/archives/2016/12/index.html","2d9c0d5f480cc7cfa29efbf4d9e95904"],["/archives/2016/index.html","ea7ecae27fc334ba1be298abee36e0b6"],["/archives/2016/page/2/index.html","42e2aa6f997088d7461e02e76a9cbe95"],["/archives/2017/02/index.html","baea95641a70ad2d269e958e6d9a9914"],["/archives/2017/index.html","524dd6db0efbfe2d771cca9f15f8f74d"],["/archives/index.html","f5fce2a12eeec46faf68afdf761f04ae"],["/archives/page/2/index.html","ac9dcff601683ac79db121e2288312f1"],["/archives/page/3/index.html","ac9dcff601683ac79db121e2288312f1"],["/categories/Black-Girl-Magic/index.html","24f45487776ffd8166926ff278251e10"],["/categories/Technology/index.html","8990fa84c9bb7bd8544b00be0effafed"],["/categories/Technology/page/2/index.html","a3d9d1734bdf95feb1ec069fa9ec45c0"],["/categories/Technology/page/3/index.html","a3d9d1734bdf95feb1ec069fa9ec45c0"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","19d22e91aa6a388e14b91bf1513d2b1d"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","e78a4d3259e9e8745e8848ab9ec7c903"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","a7795846e186497fd9cc6c4b3bb2d864"],["/page/3/index.html","c372d86a8d442fe0b565fda7b9110ed1"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","0bc177458343cdd11748700c3fb48aeb"],["/sass/ie9.css","27ce79205ec323be9eb06f1be1da307c"],["/sass/main.css","27ecfd2ec36d98b9c97b9c169b28d70b"],["/tags/Black-girl-magic-Hair/index.html","4c0a354570ddade2e706881f2d24a36f"],["/tags/Black-girl-magic/index.html","a95b739c7a2dcc49b7e75c7a1118dc1e"],["/tags/Career-Technology/index.html","0d7cf9f17776b0acefd689cbf7239873"],["/tags/CodePen-Javascript/index.html","689048e591ccfd4157818ecad90a0272"],["/tags/Fashion-Technology/index.html","7d458844e907398fa54bf124183465cb"],["/tags/Mentoring-Technology-Hackathon/index.html","19b69a3be940ed7f9b9b526b5b8bc5b3"],["/tags/SVG-Animation-Technology/index.html","daec772d5ffadc23084aaf621dfc6dbb"],["/tags/Technology-Goals/index.html","477b0867e44ba59c814edde8bbc81719"],["/tags/Technology-Hackathon/index.html","a022bb76e3f1afa12c0b93f86b111054"],["/tags/Technology-Marketing/index.html","0e9fd3a8c64fd84c4505499fd4dd8e2b"],["/tags/Technology-Offline-Web-Apps-Future/index.html","52f5d916beda5c67dd15058f41a1797c"],["/tags/Technology-Tech-while-Black/index.html","d3c0d1487394762aa85b4e54306050c4"]];
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







