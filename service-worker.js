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

var precacheConfig = [["/2015/11/07/Making-The-Transition/index.html","dac9a78019a25cb36d326fb16cb6c106"],["/2015/11/08/Recent-Fash-Tech-Posts/index.html","82a3b89e075fe45709f08ee48a14c14a"],["/2015/11/14/Digital-Marketing-Advice/index.html","13d1766bee824494b99a8e2aa10f6dd1"],["/2015/11/15/Making-The-Transition-Part2/index.html","9ce53fb37727e038aafd46a40396f834"],["/2015/11/16/Making-The-Transition-Part3/index.html","dd490bc97c018fdcfcd6a55de1d7b70b"],["/2015/11/29/Jealous-Females/index.html","c6287c8699eccb69127d38e620821e5d"],["/2015/11/30/Messy-Hair/index.html","1cfd553c6729e934f72a591fb3898594"],["/2016/01/23/Oscars-So-White/index.html","771fd8b2f548f8b28fbfe0fc34154021"],["/2016/02/02/Family-Tree/index.html","d9bca68a8f5e799109407e67883f28e5"],["/2016/03/17/Be-A-Mentor/index.html","ce34dcbf493408500d3be93eb36a703b"],["/2016/04/09/Empowerhacking-A-Story/index.html","2929ff9e53981e6da517b6be5c0c1a60"],["/2016/04/25/Empowerhacking-A-Story-Part2/index.html","b95b9650f80ce7998e63e0f6d48c9424"],["/2016/04/25/Empowerhacking-A-Story-Part3/index.html","d5722e4c81c6d99ca32d1471b9f63744"],["/2016/05/26/Urban-Exposure/index.html","8717739bcc414e21caab4f895b752716"],["/2016/11/02/PWA/index.html","a55e3ffefaf9e13650fea374022258eb"],["/2016/12/31/Goals/index.html","b5fb0e02598148bf66a24b970aa74f65"],["/2017/02/20/Playing-with-GSAP/index.html","53459462b65ddb052a528cb1b6f7892a"],["/2017/06/10/Back-To-Basics/index.html","c8d29fe24f6ee18cf04a0f8f9047a24d"],["/2017/06/11/Javascript-30/index.html","0a95ee6155f8a86a2e30087bc685a995"],["/archives/2015/11/index.html","86d79f824da0559a42e1fa383421f3f7"],["/archives/2015/11/page/2/index.html","90334d0b45278ac43a6c989fd59aa491"],["/archives/2015/index.html","5c82fe5608b465eeb4bcd8fbcda6f15a"],["/archives/2015/page/2/index.html","3562ddd971ced395f649e46bc90fc186"],["/archives/2016/01/index.html","dbce7a33d6df45e502a34c6a5d647b48"],["/archives/2016/02/index.html","a5b003663de038979275ea746537683a"],["/archives/2016/03/index.html","40cee7f3c384bbba8316b82c55750540"],["/archives/2016/04/index.html","923bc0cac236662282ff32022ec0d47a"],["/archives/2016/05/index.html","8bf05dbaff8f9ae8c224ae6dd6df6c58"],["/archives/2016/11/index.html","155a176ffccbec4b15ac12acd131d201"],["/archives/2016/12/index.html","30397ae27d93eeb8e7a8bb3be970c0de"],["/archives/2016/index.html","dadeed5a5a36091ffbf9514489ab6fc7"],["/archives/2016/page/2/index.html","45393d30e7625281a44333565d88d166"],["/archives/2017/02/index.html","4263cf988adc22ee17bd755d2839c68e"],["/archives/2017/06/index.html","400b564d9ee422784a0a1399262b8b01"],["/archives/2017/index.html","fda254297cbf7a711d552751affadcb1"],["/archives/index.html","4aa0fc8be571564f326dcc04cac76789"],["/archives/page/2/index.html","93025bcbec40cf2bcf910eaf48cbeea1"],["/archives/page/3/index.html","93025bcbec40cf2bcf910eaf48cbeea1"],["/archives/page/4/index.html","93025bcbec40cf2bcf910eaf48cbeea1"],["/categories/Black-Girl-Magic/index.html","7a343f76bbea59b68ff099ec0a8a182d"],["/categories/Technology/index.html","c081a2fa29eb16627fa847f8c82965a5"],["/categories/Technology/page/2/index.html","ab2548acc1947cb3815c047847fac763"],["/categories/Technology/page/3/index.html","ab2548acc1947cb3815c047847fac763"],["/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/css/ie8.css","b37bd5e279e081a1ae6755125a36f8f0"],["/css/ie9.css","a374618de002f0530bf07e8a3ebe9d23"],["/css/main.css","19d22e91aa6a388e14b91bf1513d2b1d"],["/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/fonts/fontawesome-webfont.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/images/barca1.jpg","22710ab4e697731068adc0bdc30fdf74"],["/images/logo.svg","c0da877e33b1958094d105795a2a3cb0"],["/images/ux3.jpg","f1f3020035397267ff51c61782c64790"],["/index.html","43f98b3dbfeed69894444fbf82a9ba48"],["/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/main.js","227a379f9dc3dcee92415f890f81e199"],["/js/skel.min.js","a355f9a2e364b48e6c193e4e1990e01e"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/page/2/index.html","8ed219bab8363dc78d00d7244841fd61"],["/page/3/index.html","2a90b4d58874dae5f2936ed9e818d7c2"],["/page/4/index.html","b5911720271af1cf567b5def6476c5dd"],["/sass/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/sass/ie8.css","0bc177458343cdd11748700c3fb48aeb"],["/sass/ie9.css","27ce79205ec323be9eb06f1be1da307c"],["/sass/main.css","6de1f6afdcf854cb8281e5c0ac3efa35"],["/tags/Black-girl-magic-Hair/index.html","0d11696408b7411a0feb91a514270514"],["/tags/Black-girl-magic/index.html","b17dbaaa40c281d2a2f94fd7caabf4ad"],["/tags/Career-Technology/index.html","7ff67d04ac8f6d6253fa03c4926164da"],["/tags/CodePen-Javascript/index.html","bb201062d3ac1fd3cdc881b234a27c11"],["/tags/Fashion-Technology/index.html","a0825f56316f7b04cacfb81cda05341f"],["/tags/Mentoring-Technology-Hackathon/index.html","b2f08c6c84ac4f9beaa4011fdaadcbd3"],["/tags/SVG-Animation-Technology/index.html","897761a14d3fa4873d3e1e2d20508a65"],["/tags/Technology-Goals/index.html","1a01e5b2ec5ca587fbc3218c13f5fb78"],["/tags/Technology-Hackathon/index.html","70639f84f10e9c87358d14232098a0c4"],["/tags/Technology-Javascript/index.html","2152841ab6a9797a70476048a3804e52"],["/tags/Technology-Marketing/index.html","f64ef277ea7f1b867191bff05b6cd381"],["/tags/Technology-Offline-Web-Apps-Future/index.html","fa10f6fcf60390d998862e2854037642"],["/tags/Technology-Tech-while-Black/index.html","8697475572fa2e87a083336aac9c4476"]];
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







