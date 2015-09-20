---
layout: post
title: "My first lesson: copying Chaos in Yemen"
---

Let's get started. I'm going to copy this beautiful map by the [New York Times](http://www.nytimes.com/interactive/2015/03/26/world/middleeast/geography-of-chaos-in-yemen-maps.html?smid=tw-share): [![Mapping Chaos in Yemen]({{site.baseurl}}/assets/yemen/yemen-original.jpg)](http://www.nytimes.com/interactive/2015/03/26/world/middleeast/geography-of-chaos-in-yemen-maps.html?smid=tw-share)

## Analysis: identify every design element

![Analysis]({{site.baseurl}}/assets/yemen/yemen-analysis.jpg)

Some of this might seem obvious (e.g. scale, place labels) but I'm going to try and note every single design element, at least for now.

Let's tackle shaded relief first. Note that there are actually two parts to this: 1) the relief itself, and 2) the color ramp. Using a color picker tool I see that valleys are in light cream `rgb(247, 240, 230)`, and mountains appear to be in a dark grey `rgb(202, 197, 191)`: ![Color ramp]({{site.baseurl}}/assets/yemen/yemen-color-ramp.png)

How do I make a shaded relief? At this point I googled and read for hours. There are lots of great tutorials out there, e.g.:

- [Shaded Relief](http://www.shadedrelief.com/) - entire site dedicated to shaded relief
- [Relief Shading](http://www.reliefshading.com/) - same as above
- [Adding Shaded Relief in Photoshop](https://somethingaboutmaps.wordpress.com/2014/10/26/adding-shaded-relief-in-photoshop/)

That was fun! Now let's look for elevation data. Natural Earth is a great starting point. Let's check out their most detailed [shaded relief](http://www.naturalearthdata.com/downloads/10m-raster-data/10m-shaded-relief/): ![Analysis]({{site.baseurl}}/assets/yemen/NE_SR_HR.jpg)

Ignore the ugly default colors, this is a screenshot of the raster loaded up in QGIS with no color ramps. Looks like this isn't detailed enough. Let's work with DEMs, raw data from satellites. 
