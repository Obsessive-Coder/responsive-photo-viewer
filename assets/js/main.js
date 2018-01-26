// $(document).ready(function() {
// Get the page name for displaying correct images.
var pageName = getPageFromURI(document.documentURI);

// Check the screen size 4 times per second
// and show the correct image accordingly.
setInterval(function() {
  var screenWidth = screen.width;
  // Screen with is 980px or greater.
  if (screenWidth >= 980) {
    document.getElementById('responsive-image').style.backgroundImage = 'url("../images/980-' + pageName + '.jpg")';
    // $('img').css('content', 'url("assets/images/980-' + pageName + '.jpg")');
    return true;
  }

  // Screen width is between 768px and 979px.
  if (screenWidth >= 768 && screenWidth <= 979) {
    document.getElementById('responsive-image').style.backgroundImage = 'url("../images/768-' + pageName + '.jpg")';
    // $('img').css('content', 'url("assets/images/768-' + pageName + '.jpg")');
    return true;
  }

  // Screen width is 640px or less.
  if (screenWidth <= 640) {
    document.getElementById('responsive-image').style.backgroundImage = 'url("../images/640-' + pageName + '.jpg")';
    // $('img').css('content', 'url("assets/images/640-' + pageName + '.jpg")');
    return true;
  }

  return false;
}, 250);

// Get the name of the page from the uri.
function getPageFromURI(uri) {
  var splitURI = uri.split('/');
  return splitURI[splitURI.length - 1].replace('.html', '');
}
// });
