$(document).ready(function() {
$(document).on('load', enableOrDisableButtons()); //checks if data entry fields are empty on page load

$('.title-input, .url-input').on('keyup keydown', function () { ///checks if data entry fields are empty when user types in these fields
  enableOrDisableButtons();
});

//If both fields are not empty (i.e. 'truthy') enable button
function enableOrDisableButtons() {
  if ($('.title-input').val() && $('.url-input').val()) {
    $('.submit-new-bookmark').prop("disabled", false);
  }
  else {
    $('.submit-new-bookmark').prop("disabled", true);
  }
}

$('.submit-new-bookmark').click( function() { //Static submit functionality
  runOneTurnOfSubmit();
});

$(".title-input, .url-input").on("keydown", function(key) { // adds functionality of running run turn of submitting a bookmark when the user presses "enter" in an input field; checks if both fields are truthy
  if (key.which === 13) { // the enter key
    runOneTurnOfSubmit();
  }
});

function runOneTurnOfSubmit() {
  titleField = $('.title-input').val();
  urlField = $('.url-input').val();
  if (checkEmpty()) {
    return;
  }
  createBookmark(titleField, urlField);
  countTotalBookmarks();
}

function createBookmark(x, y) { // creates a section containing the new bookmark, the bookmark itself, and the new buttons
  var newBookmark = "<section class='bookmark'><p class='bookmark-title-output'>"+titleField+"</p><a class='bookmark-url-output' href='"+urlField+"' target='blank' type='url' pattern='https?://.+' required>"+urlField+"</a><button type='button' class='mark'>Mark as Read?</button><button type='button' class='remove-mark'>Remove Link</button></section>";
  $('.bookmark-list').prepend(newBookmark);
}

$(document).on('click', '.mark', function() { //marks bookmarks as read or unread
  $(this).parent().toggleClass("read");
  //Runs function to count read / unread bookmarks
  determineCountOfReadAndUnread();
});

$(document).on('click', '.remove-mark', function () { // when they click on "Remove Link" button
  $(this).parent().remove();

  countTotalBookmarks(); //Runs function to count total bookmarks

  determineCountOfReadAndUnread(); //Runs function to count read / unread bookmarks
});

function determineCountOfReadAndUnread() {
  var totalRead = $(".read").length;
  $("#total-read-count").text(totalRead + " bookmarks have been read");
  var totalUnread = $(".bookmark").length - totalRead;
  $("#total-unread-count").text(totalUnread + " bookmarks remain unread");
}

function countTotalBookmarks() {
  var totalBookmarks = $(".bookmark").length;
  $('.footer-directions').html(totalBookmarks + " " + "bookmarks are on the page");
  }

$("#clear-read-button").on("click", function() {
  clearReadButtons();
  determineCountOfReadAndUnread();
  countTotalBookmarks();
});

function clearReadButtons () {
  $(".read").remove();
}

$('#mark-all-read-button').on('click', function(){
  markAllAsRead();
  determineCountOfReadAndUnread();
});

function markAllAsRead () {
  $('.bookmark').addClass('read');
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
  var urlRegEx = new RegExp(/(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); //From Kinan's Slack snippet
  if (urlRegEx.test($('.url-input').val())) {
    return false;
  }
  return true;
}
}); // end of master jQuery function
