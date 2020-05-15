/**
* TEMPLATE 3 JAVASCRIPT
*/

// Flickity Carousel
// JQuery required
// options: https://flickity.metafizzy.co/options.html
$(document).ready(function() {
    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        autoPlay: true,
        wrapAround: true
        })
  });
  