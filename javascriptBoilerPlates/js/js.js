/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

// paste your javascript here 
// the image names should be real image names
var myGallery = [
  "scenery.png",
  "home.png",
  "nightcity.png",
  "hotbath.png",
  "sea.png",
  "villas.png",
  "waterfall.png",
  "mountains.png"
];


for (i = 0; i < myGallery.length; i++) {
    // note the shorthand code below
    exhibition.innerHTML += '<img src="images/' +
        myGallery[i] +
        '" alt="from my galleries">';
}
// let the loop create the HTML for your gallery
