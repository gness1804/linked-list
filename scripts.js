$(document).ready(function() {
// PHASE ONE
// User can input a title and URL into appropriate fields and when submit button is clicked, bookmark populates appropriate section
var titleField = $('.title').val();
var urlField = $('.url').val();

$('.submit').click( function() {
  titleField = $('.title').val();
  urlField = $('.url').val();
  createBookmark(titleField, urlField);
  debugger;
});

function createBookmark(x, y) {
  var newBookmark = "<section class='bookmark'><p class='titleResult'>"+titleField+"</p><p class='urlResult'>"+urlField+"</p></section><br><button type='button'>Mark as Read?</button>";
  $('.bookmark-list').append(newBookmark);
}


// User clicks on "Mark as Read", class of '.read' is added to the title
$('.mark-read').click( function() {
  $('.bookmark').addClass('read');
});
// If bookmark has class of '.read' class should be removed

//User clicks on "Remove"
$('.remove').click( function() {
  $('.bookmark').remove();
});
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
