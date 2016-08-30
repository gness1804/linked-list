$(document).ready(function() {
// PHASE ONE
// User can input a title and URL into appropriate fields and when submit button is clicked, bookmark populates appropriate section
var titleField;
var urlField;

$('.submit').click( function() {
  var titleField = $('.title').val();
  var urlField = $('.url').val();
  createBookmark(titleField, urlField);
});

function createBookmark(x, y) {
  $('.titleResult').text(x);
  $('.urlResult').text(y);
}
// User clicks on "Mark as Read"
// A class of '.read' is added to bookmark
// If bookmark has class of '.read' class should be removed

//User clicks on "Remove"
//Link should be removed from the page

//PHASE TWO

//If user omits 'title' or 'URL' display error message upon clicking submit

//PHASE THREE

//Disable button for creating links IF A field is blank
//Application should keep count of total number of links once they are submitted or removed
//Application should keep count of total number of read of unread links currently on the page

//PHASE FOUR
//Add a "clear read bookmarks" button which clears bookmarks
//User should not allow invalid 'URL' inputs
});
