$(document).ready(function() {

var titleField = $('.title').val();
var urlField = $('.url').val();

$(document).on('load', enableOrDisableButtons());
$('.title, .url').on('keyup keydown', function () {
  enableOrDisableButtons();
});

function enableOrDisableButtons() {
  if ($('.title').val() && $('.url').val()) {
    $('.submit').prop("disabled", false);
  }
  else {
    $('.submit').prop("disabled", true);
  }
}

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
  addBookmarkToCounter();
}

var count = 0; // to count the number of links on the page, or the number of times the addBookmarkToCounter function gets fired

function addBookmarkToCounter() { // adds to the count of bookmarks on page
  count = count + 1;
  $("#how-many-bookmarks").text(count);
}

$(document).on('click', '.mark', function() { //marks bookmarks as read or unread
  $(this).parent().toggleClass("read");
});

$(document).on('click', '.remove-mark', function () { // they click on "Remove Link" button
  $(this).parent().remove();
  removeBookmarkFromCounter();
});

function removeBookmarkFromCounter() {
  count = count - 1;
  $("#how-many-bookmarks").text(count);
}

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

//Disable button for creating links IF A field is blank
//Application should keep count of total number of links once they are submitted or removed
//Application should keep count of total number of read of unread links currently on the page

//PHASE FOUR
//Add a "clear read bookmarks" button which clears bookmarks
//App should not allow invalid 'URL' inputs
}); // end of master jQuery function
