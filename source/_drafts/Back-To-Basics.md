---
title: Back To Basics With Javascript30
subtitle: Keep it simple, stupid
categories: Technology
tags: Technology, Javascript
---
<center>
  <figure>
    <img src="https://cdn-images-1.medium.com/max/800/1*C5JB4zEpTQgt-VZjUodRDA.png" alt="Javascript30 Homepage"/>
    <figcaption>Javascript30 Homepage</figurecaption>
  </figure>
</center>

I've been slacking with doing code at home for *_MONTHS_*. No excuse for it, just haven't been doing it. Recently I've had a kick up the bum and decided to follow [Wes Brown's Javascript30](https://javascript30.com/) to ease myself back in and it's free, which is my absolute favourite price.

The aim of Javascript30 is to get developers and designers more comfortable with Javascript fundamentals and working with the DOM _*without*_ using a library.

##### No library, but...BUT...

Don't panic! I've been using libraries and frameworks for a while now and quite frankly, I'm probably too reliant on them. Honestly, vanilla Javascript (ES6) is not that bad and sometimes you just need to keep it simple stupid.

##### So how's it going so far?

<center>
  <figure>
    <img src="https://s3.amazonaws.com/js30-cdn/small0.jpg"alt="JS Drumkit"/>
    <figcaption>JS Drumkit</figurecaption>
  </figure>
</center>

I've just completed day one and created a drum kit (just want to say sorry to my neighbours for getting a bit too excited and playing with my newly built toy late into a Friday night 😜).

Now if the thought of building a Drumkit is intimidating, especially without a library, let me reassure you, it's not that scary. In the end I wrote a grand total of 20 lines of Javascript. That's including a 10 line `playSound()` function (see below).

```
function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if(!audio) return; // will stop the function from running altogether if there is no audio for that key

  key.classList.add('playing');
  audio.currentTime = 0; // rewind to beginning
  audio.play();
}
```

Surprisingly I'd never used or even heard of the HTML5 `<audio>` element before and I have to say I love it! Especially after spending a day at work trying to figure out a sound engine. Doesn't `HTML5` just make the world a better place ☺️.

For day 2 we get to build a CSS and JS clock, maybe I'll share it with you here. Or maybe you could join me and do Javascript30 too.

You can find my Drumkit [here](http://tanyapowell.co.uk/drumkit/) (it's only on desktop btw) if you fancy a play. If you'd like to tell me about more `HTML5` elements I'm missing out on just [tweet me](https://twitter.com/tanya_powell).
