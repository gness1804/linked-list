$(document).ready(function() {

var titleField = $('.title').val();
var urlField = $('.url').val();

$('.submit').click( function() { //when they press the static submit button
  titleField = $('.title').val();
  urlField = $('.url').val();
  if (checkEmpty()) {
    return;
  }
  createBookmark(titleField, urlField);
});

function createBookmark(x, y) { // creates a section containing the new bookmark and the bookmark itself
  var newBookmark = "<section class='bookmark'><p class='titleResult'>"+titleField+"</p><p class='urlResult'>"+urlField+"</p><button type='button' class='mark'>Mark as Read?</button><button class='remove-mark'>Remove Link</button></section>";
  $('.bookmark-list').append(newBookmark);
}

$(document).on('click', '.mark', function() {
  $(this).parent().toggleClass("read");
});

$(document).on('click', '.remove-mark', function () {
  $(this).parent().remove();
});

$('.remove').click( function() { //User clicks on "Remove"
  $('.bookmark').remove();
});

//PHASE TWO

function checkEmpty() { // data verification that user added input to both fields
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

//PHASE THREE
$(document).on('load', enableOrDisableButtons());
$('.title').on('keyup keydown', enableOrDisableButtons());


function enableOrDisableButtons() {
  // if ($('.title').val() && $('.url').val()) {
  //   $('.submit').prop("disabled", false);
  //   // alert("hi");
  // }
  // else {
  //   $('.submit').prop("disabled", true);
  // }
  alert('hi');
}

//Disable button for creating links IF A field is blank
//Application should keep count of total number of links once they are submitted or removed
//Application should keep count of total number of read of unread links currently on the page

//PHASE FOUR
//Add a "clear read bookmarks" button which clears bookmarks
//App should not allow invalid 'URL' inputs
}); // end of master jQuery function
