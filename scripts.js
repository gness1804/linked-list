$(document).ready(function() {
// PHASE ONE
// User can input a title and URL into appropriate fields and when submit button is clicked, bookmark populates appropriate section
var titleField = $('.title').val();
var urlField = $('.url').val();

$('.submit').click( function() {
  titleField = $('.title').val();
  urlField = $('.url').val();
  if (checkEmpty()) {
    return;
  }
  createBookmark(titleField, urlField);
});

function createBookmark(x, y) {
  var newBookmark = "<section class='bookmark'><p class='titleResult'>"+titleField+"</p><p class='urlResult'>"+urlField+"</p><button type='button' class='mark'>Mark as Read?</button><button class='remove-mark'>Remove Link</button></section>";
  $('.bookmark-list').append(newBookmark);
}

$(document).on('click', '.mark', function() {
  $(this).parent().toggleClass("read");
});

$(document).on('click', '.remove-mark', function () {
  $(this).parent().remove();
});

//former body of function
// if ($(this).parent().hasClass(".read")) {
//   $(this).parent().removeClass("read");
// }
// else if (!$(this).parent().hasClass(".read")) {
//   $(this).parent().addClass("read");
// }

// $(this).parent().addClass('read');

// If bookmark has class of '.read' class should be removed

//User clicks on "Remove"
$('.remove').click( function() {
  $('.bookmark').remove();
});
//Link should be removed from the page

//PHASE TWO

function checkEmpty() {
  if ((titleField === '') && (urlField === '')) {
    alert('ERROR: PLEASE FILL IN BOTH FIELDS');
    return true;
  }
  if (titleField === '') {
    alert('ERROR: TITLE HAS BEEN OMITTED');
    return true;
  }
  if (urlField === '') {
    alert('ERROR: URL HAS BEEN OMITTED');
    return true;
  }
}
//If user omits 'title' or 'URL' display error message upon clicking submit

//PHASE THREE
$(document).on('load', disableButton());


function disableButton() {
  if ( (titleField === '') || (urlField === '') ){
    $('.submit').prop("disabled", true);
  }
}

//Disable button for creating links IF A field is blank
//Application should keep count of total number of links once they are submitted or removed
//Application should keep count of total number of read of unread links currently on the page

//PHASE FOUR
//Add a "clear read bookmarks" button which clears bookmarks
//User should not allow invalid 'URL' inputs
}); // end of master jQuery function
