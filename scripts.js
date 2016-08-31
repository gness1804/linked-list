//Enables jQuery
$(document).ready(function() {
//Global variables for input fields
// var titleField = $('.title').val();
// var urlField = $('.url').val();
//Toggles submit button from disabled to enabled
$(document).on('load', enableOrDisableButtons());
$('.title, .url').on('keyup keydown', function () {
  enableOrDisableButtons();
});
//If both fields are not empty (i.e. 'truthy') enable button
function enableOrDisableButtons() {
  if ($('.title').val() && $('.url').val()) {
    $('.submit').prop("disabled", false);
  }
  else {
    $('.submit').prop("disabled", true);
  }
}

$('.submit').click( function() { //Static submit functionality
  titleField = $('.title').val();
  urlField = $('.url').val();
  if (checkEmpty()) {
    return;
  }
  createBookmark(titleField, urlField);
  countTotalBookmarks();
});

function createBookmark(x, y) { // creates a section containing the new bookmark, the bookmark itself, and the new buttons
  var newBookmark = "<section class='bookmark'><p class='titleResult'>"+titleField+"</p><p class='urlResult'>"+urlField+"</p><button type='button' class='mark'>Mark as Read?</button><button type='button' class='remove-mark'>Remove Link</button></section>";
  $('.bookmark-list').append(newBookmark);
}

$(document).on('click', '.mark', function() { //marks bookmarks as read or unread
  $(this).parent().toggleClass("read");
  //Runs function to count read / unread bookmarks
  determineCountOfReadAndUnread();
});

$(document).on('click', '.remove-mark', function () { // they click on "Remove Link" button
  $(this).parent().remove();
  //Runs function to count total bookmarks
  countTotalBookmarks();
  //Runs function to count read / unread bookmarks
  determineCountOfReadAndUnread();
});

$("#testReadAndUnread").click(function () { //Read and Unread Button functionality
  determineCountOfReadAndUnread();
});

function determineCountOfReadAndUnread() {
  var totalRead = $(".read").length;
  $("#totalRead").text(totalRead + " " + "bookmarks have been read.");
  var totalUnread = $(".bookmark").length - totalRead;
  $("#totalUnread").text(totalUnread + " " + "bookmarks remain unread.");
}

$("#buttonCountBookmarks").on("click",  function() { //counts bookmarks on click
  countTotalBookmarks();
  });

function countTotalBookmarks() {
  var totalBookmarks = $(".bookmark").length;
  $("#totalBookmarks").text(totalBookmarks + " " + "bookmarks are on the page.");
  }

$("#clear-read-buttons").on("click", function() {
  clearReadButtons();
});

function clearReadButtons () {
  $(".read").remove();
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
  if (validURL()) {
    alert('ERROR: NOT VALID URL');
    return true;
  }
}

//REGEX
function validURL() {
  var urlRegEx = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (urlRegEx.test($('.url').val())) {
    return false;
  }
  return true;
}
//PHASE THREE
// $(document).on('load', disableButton());
// $('.title, .url').on('click', enableButton());



function disableButton() {
  if ( (titleField === '') || (urlField === '') ){
    $('.submit').prop("disabled", true);
  }
}
function enableButton() {
  if ( ($('.title').val() !== '') && ($('.url').val() !== '') ) {
    $('.submit').prop("disabled", false);
  }
}

//Disable button for creating links IF A field is blank
//Application should keep count of total number of links once they are submitted or removed
//Application should keep count of total number of read of unread links currently on the page

//PHASE FOUR
//Add a "clear read bookmarks" button which clears bookmarks

}); // end of master jQuery function
