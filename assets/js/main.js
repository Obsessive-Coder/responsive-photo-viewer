var pageName;

$(window).on('load', function() {
  pageName = getPageFromURI(document.documentURI);
});

$(window).on('load resize', function() {
  var image = $('#responsive-image');
  var imageSRC = $(image).attr('src');
  var imagePath = 'assets/images/';
  var screenWidth = $(window).width();

  // Larger than 980px
  if (isWithinRange(screenWidth, 981, 999999999999999999)) {
    if (!isImageShown(imageSRC, imagePath, 'full', pageName, '.png')) {
      $(image).attr('src', imagePath + 'full-' + pageName + '.png');
    }
    return true;
  }

  //  980px
  if (isWithinRange(screenWidth, 769, 980)) {
    if (!isImageShown(imageSRC, imagePath, '980', pageName, '.jpg')) {
      $(image).attr('src', imagePath + '980-' + pageName + '.jpg');
    }
    return true;
  }

  // 768px
  if (isWithinRange(screenWidth, 641, 768)) {
    if (!isImageShown(imageSRC, imagePath, '768', pageName, '.jpg')) {
      $(image).attr('src', imagePath + '768-' + pageName + '.jpg');
    }
    return true;
  }

  // 640px or less.
  if (isWithinRange(screenWidth, 0, 640)) {
    // if (screenWidth <= 640) {
    if (!isImageShown(imageSRC, imagePath, '640', pageName, '.jpg')) {
      $(image).attr('src', imagePath + '640-' + pageName + '.jpg');
    }
    return true;
  }

  return false;
});

function isWithinRange(screenWidth, min, max) {
  if (screenWidth >= min && screenWidth <= max) {
    return true;
  }
  return false;
}

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
