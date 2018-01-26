$(document).ready(function() {
  setInterval(function() {
    var screenWidth = screen.width;
    // Screen with is 980px or greater.
    if (screenWidth >= 980) {
      $('img').css('content', 'url("assets/images/980-index.jpg")');
      return true;
    }

    // Screen width is between 768px and 979px.
    if (screenWidth >= 768 && screenWidth <= 979) {
      $('img').css('content', 'url("assets/images/768-index.jpg")');
      return true;
    }

    // Screen width is 640px or less.
    if (screenWidth <= 640) {
      $('img').css('content', 'url("assets/images/640-index.jpg")');
      return true;
    }

    return false;
  }, 250);
});
