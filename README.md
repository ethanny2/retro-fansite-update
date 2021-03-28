[![GitHub license](https://img.shields.io/github/license/ethanny2/retro-fansite-update)](https://github.com/ethanny2/retro-fansite-update)[![GitHub stars](https://img.shields.io/github/stars/ethanny2/retro-fansite-update)](https://github.com/ethanny2/retro-fansite-update/stargazers)[![GitHub forks](https://img.shields.io/github/forks/ethanny2/retro-fansite-update)](https://github.com/ethanny2/retro-fansite-update/network)[![Twitter Badge](https://img.shields.io/badge/chat-twitter-blue.svg)](https://twitter.com/ArrayLikeObj)

# Retro Fansite + Webpack 5 Optimizations

## [https://unofficial-playboicarti.netlify.app/](https://unofficial-playboicarti.netlify.app/)


<p align="center">
  <img  src="https://media4.giphy.com/media/8WBUuhMpf0jy6EMOk8/giphy.gif" alt="Demo gif">
</p>

## Background

The original concept for the site, as instructed by a client, was to make a site for them to promote their music. Later that agreement fell through but since I had already made the site I just replaced the subject matter with a trending artist at the time. 

This site is meant to have an old-school grungy aesthetic with the use of a non-traditional background , animated transparent gifs and other florishes. Similar to the website style of the popular fasion brand [AWGE](https://www.awge.com/home).

**Goals (for rehosting site)** : 
   - Optimize the bundle size and lighthouse scores
   - Tweak the design and remove unused SCSS with PurgeCSS 

## Technology used
- SCSS
- webpack 5 
- PHP Scraping
- Bootstrap
- jQuery (kept for Masonry support)
- [Masonry.js library](https://masonry.desandro.com/)
- Soundcloud and Youtube API / iframe
- image optimizations with webp + fallbacks
## Concepts

### webpack 5 bundling

Using my own custom webpack 5 dev and production configuration to have a local dev-server with [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) and optimizied production build with minification, auto-prefixing for CSS properties and more. The upgrade from webpack 4 -> webpack 5 makes bundling static assets  (images, json files etc...) very easy.
```
/* loads nearly all assets; no external plugins */
{
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|webp|woff2|woff|eot)$/i,
        type: "asset/resource"
},
```


### webp images with fallback

Running a script as a pre-build step convert all png/jpg files to webp versions to cut back on bundle sizes for browsers that do support webp images.
```
(async () => {
  const img = await imagemin([path.resolve(__dirname, "src/static/images/*.{jpg,png}").replace(/\\/g, "/")], {
    destination: path.resolve(__dirname, "src/static/images/").replace(/\\/g, "/"),
    plugins: [imageminWebp({ quality: 70 })]
  });
  console.log(img);
  console.log("Done converting images");
})();

```

### Masonry.js + jQuery

Use of the Masonry library to create a music viwer for the older half of the artist's discography; which is sourced from public Soundcloud links and brought in via an iframe. 

```
  grid = new Masonry("#grid", {
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    percentPosition: true,
    resize: true,
    transitionDuration: "0.5s"
  });
  $("#grid").on("click", ".grid-item-content", function () {
    var itemContent = this;
    var itemElem = itemContent.parentNode;
    $(itemElem).removeClass("grow");
    removeAllActive();
    toggleSoundCloudPlayer(itemElem, itemContent);
    $(itemElem).toggleClass("expand");
    grid.layout();
  });
```

