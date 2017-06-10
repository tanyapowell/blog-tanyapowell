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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","fd2d031ea7d6e13ed930a1156b65709c"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","3ebbd6cfc4ef16c81d57415da433d805"],["/2015/11/14/Digital-Marketing-Advice/index.html","b673df80577a158056440476706678ec"],["/2015/11/15/Making-The-Transition-Part2/index.html","bdab331909d3e8e9facbdcdb53867c3a"],["/2015/11/16/Making-The-Transition-Part3/index.html","a3699b9158e527f886dd8ea0ab7d86bf"],["/2015/11/29/Jealous-Females/index.html","0b971b3ebaf87b82597fb0805252511a"],["/2015/11/30/Messy-Hair/index.html","293db5e6596991aeb3170087aa0da7cf"],["/2016/01/23/Oscars-So-White/index.html","111bc2bae622d5ba6fff050ebcd5c45d"],["/2016/02/02/Family-Tree/index.html","6ff7e1fc2132dd01f43199fdfc630803"],["/2016/03/17/Be-A-Mentor/index.html","06b6f978596d439458f1337f9bbd5c7b"],["/2016/04/09/Empowerhacking-A-Story/index.html","9fe76306f6c96980cfb4039b917ad12a"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","97dce1aa86d0c3c5a26d8870f154add3"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","92e555e624f551ad2cd04e2090180f5b"],["/2016/04/27/How-To-Blog-With-WHFNP/index.html","62f42212bd478a42877e23848cc31303"],["/2016/05/26/Urban-Exposure/index.html","dc70b9feb80ead34b74bb1ec63afeed0"],["/2016/11/02/PWA/index.html","edff2035354c353bb6574744204f4ef9"],["/2016/12/31/Goals/index.html","5cc920990c8b40318e42746e44278328"],["/2017/02/20/Playing-with-GSAP/index.html","6a3e45e67949edeb390846fed19c49fd"],["/archives/2015/11/index.html","6cea1ea72c6e995b9b5d47d3f905cfb4"],["/archives/2015/11/page/2/index.html","4944868643f942ebccf05314fd0a4e3a"],["/archives/2015/index.html","02769ef7d042b9a34599760c9418a455"],["/archives/2015/page/2/index.html","4f9292d1c30c90889ad3598c667fb263"],["/archives/2016/01/index.html","90fddfc686b67a790d574f4934cc6d71"],["/archives/2016/02/index.html","f9d96fd1e99456ba3cccfb08e21ce32f"],["/archives/2016/03/index.html","04675ce4d3e7bad1ac284d981f6d3963"],["/archives/2016/04/index.html","bff9f5e3d5193def5b0c88c51ea16f21"],["/archives/2016/05/index.html","369a64004e6f7cfd413df12a1465a7f5"],["/archives/2016/11/index.html","d1882c661dc20f6269503bd30cda7252"],["/archives/2016/12/index.html","e9532192f283bcc4a35111772668f1a3"],["/archives/2016/index.html","23bb87ad1a86e9a61b32f7f07ce3f034"],["/archives/2016/page/2/index.html","ede2eb1229dc69753c2783b4dce98fdd"],["/archives/2017/02/index.html","427263062932c4295418e648bb78bf2b"],["/archives/2017/index.html","89cac5a79ac6480db50a47f240521f2b"],["/archives/index.html","a4015a592605d9e49452df056393f87d"],["/archives/page/2/index.html","6a9d593f316afacbdc47d0b60d58a8cc"],["/archives/page/3/index.html","6a9d593f316afacbdc47d0b60d58a8cc"],["/categories/Black-Girl-Magic/index.html","a9a3d9f9e34390e9d0d6c19d40866b8b"],["/categories/Technology/index.html","4e883e6e41e640f083e72477a5824c21"],["/categories/Technology/page/2/index.html","021a35eb90bca8948daa0284306f48e0"],["/categories/Technology/page/3/index.html","021a35eb90bca8948daa0284306f48e0"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","f56c6adfb98a9a7d98bea3b56a58ab34"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","0be805bf5d1edd7e9f93c353b827c555"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","1ca456459e1797ce565ace01956bc7bf"],["/page/3/index.html","8cae8c8f52271a2458193a4f3bf6c181"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","0bc177458343cdd11748700c3fb48aeb"],["/sass/ie9.css","27ce79205ec323be9eb06f1be1da307c"],["/sass/main.css","27ecfd2ec36d98b9c97b9c169b28d70b"],["/tags/Black-girl-magic-Hair/index.html","196b411f6eeeb91d47b935cdc150d604"],["/tags/Black-girl-magic/index.html","264738fb5880b880990bfc9c1b5aa8af"],["/tags/Career-Technology/index.html","c5af07baa0e14cfcda8244361e75d150"],["/tags/CodePen-Javascript/index.html","6a3b3377779c3db0c653505b2c62a3fe"],["/tags/Fashion-Technology/index.html","be5c4a5cb44e9188c48510fa0d8060cb"],["/tags/Mentoring-Technology-Hackathon/index.html","38e94bedf8e71aee8d5ad7fc1eaaae6b"],["/tags/SVG-Animation-Technology/index.html","b1e6e3fcd12e8cb3a80da87104d29000"],["/tags/SVG-Animation/index.html","f778e3163f0ba683a2fb84f700410ba0"],["/tags/Technology-Goals/index.html","269bf303da85940bdea3a12480aebe89"],["/tags/Technology-Hackathon/index.html","e0e6e6beb59f54c2ada7b3a076239201"],["/tags/Technology-Marketing/index.html","e5d06ae7d31c2a284e3842cc5f2f8f58"],["/tags/Technology-Offline-Web-Apps-Future/index.html","85a3c403330faee42977e7ced3fc07eb"],["/tags/Technology-Tech-while-Black/index.html","aff6b1a2089ed4bb11db094a2abb82bd"]];
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







