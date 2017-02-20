---
title: Intro to SVG Animations
categories: technology
description: I'm a description, fool
tags:
featured_image: /images/barca1.jpg
---

![Ice Cream SVG gif](https://cdn-images-1.medium.com/max/800/1*7niSaqGN_IwJcwHbsqxHAQ.gif)

If you have never worked with SVGs, fear not. They will probably have a familiar vibe to them, mainly because SVG has a DOM, just like HTML. The unique tags, attributes and behaviours of SVG allow for the definition of arbitrary shapes and allow the ability to create images directly within the DOM. Because of this, SVG can benefit from Javascript and CSS manipulation like other DOM elements.  

It should be noted that SVG attributes don’t use `background`, instead they use fill and stroke.

##### _TANYA - What does it mean to animate with SVG?_

# Benefits of drawing with SVG
CSS3 has provided the ability to animate HTML DOM elements with CSS, however it wasn’t built for drawing. It was built for presentational formatting, whereas SVG was purposely built for drawing.

### Great! Are there anymore benefits?
Yep, there sure are.

### Individual Components
With SVG you can animate individual components.

##### EXAMPLE GOES HERE

### Scalability and Responsiveness
SVG images are infinitely responsive and are therefore responsive. Furthermore, their file sizes are small in comparison to raster images.

![](https://cdn-images-1.medium.com/max/800/0*9kjCwkCs_CIlJO9k.gif)

### So why can’t I just use JQuery?
For starters it’s 2017 and it’s the opinion of some people (I can point these people out if you like) that we should no longer be using JQuery and [use plain Javascript](http://lennydevelops.com/javascript/shouldnt-use-jquery-plain-javascript) instead. Also, neither JQuery nor CSS offer complete support for the animation of SVG specific styling properties (particularly dimensional and positional properties).

# How to animate SVGs
Fortunately we have options. To animate SVG elements either use a dedicated SVG manipulation library, a javascript manipulation library...or you can use CSS (I know what I said earlier, but bear with me).

##### _OVERVIEW GOES HERE_

### Snag.svg
### Velocity.js
### GreenSock (GSAP)
---

# _Notes_
- Animation is powerful to conveying meaning and commands attention when using
- Because it's resolution independent, you are making less HTTP requests
- Small files sizes when designed for performance
- Have a navigable DOM, meaning they are easy to animate
- Easy to make accessible, you can add titles and aria labels. So moving images can now be accessible on a screen reader
- SVGOMG by Jake Archibald is a GUI based SVG optimiser. It is recommended to use a GUI based optimiser

## SVG Sprites
- Animation media queries can work on SVG DOM elements
- ViewBox

## GSAP
- Has the widest support of Motion Along a Path
- Has draggable for mobile touch devices
- CSS Properties
- DrawSVG - it makes an SVG look like it's drawing itself
- MorphSVG
- Relative Colour Tweening
- Cycle Swagger
- Solves cross browser incompatibilities

## SnapSVG
- Allows you to Morph, but you need to have the same number of path values

## Accessiblity
- Infograhics really drive engagement
- Decouple the text from the image
- Can add aria tags
