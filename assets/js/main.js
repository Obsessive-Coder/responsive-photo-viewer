$(document).ready(function() {
  var pageName;

  $(window).on("load", function() {
    // Get the page name for displaying correct images.
    pageName = getPageFromURI(document.documentURI);
  });

  // setInterval(function() {

  $(window).on('load resize', function() {
    var image = $('#responsive-image');
    var imageSRC = $(image).attr('src');
    var imagePath = 'assets/images/';
    var screenWidth = $(window).width();

    // Larger than 980px
    if (screenWidth > 980) {
      if (!isImageShown(imageSRC, imagePath, 'full', pageName, '.png')) {
        $(image).attr('src', imagePath + 'full-' + pageName + '.png');
      }
      return true;
    }

    //  980px
    if (screenWidth >= 769 && screenWidth <= 980) {
      if (!isImageShown(imageSRC, imagePath, '980', pageName, '.jpg')) {
        $(image).attr('src', imagePath + '980-' + pageName + '.jpg');
      }
      return true;
    }

    // 768px
    if (screenWidth >= 641 && screenWidth <= 768) {
      if (!isImageShown(imageSRC, imagePath, '768', pageName, '.jpg')) {
        $(image).attr('src', imagePath + '768-' + pageName + '.jpg');
      }
      return true;
    }

    // 640px or less.
    if (screenWidth <= 640) {
      if (!isImageShown(imageSRC, imagePath, '640', pageName, '.jpg')) {
        $(image).attr('src', imagePath + '640-' + pageName + '.jpg');
      }
      return true;
    }

    return false;
  });

  // Is Image Shown
  function isImageShown(imageSRC, imagePath, size, pageName, fileType) {
    if (imageSRC == imagePath + size + pageName + fileType) {
      return true;
    }
    return false;
  }

  // Get the name of the page from the uri.
  function getPageFromURI(uri) {
    var splitURI = uri.split('/');
    var pageName = splitURI[splitURI.length - 1].replace('.html', '');

    if (!pageName) {
      pageName = "index";
    }

    return pageName;
  }
});
