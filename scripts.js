$(document).ready(function() {
// PHASE ONE
// User can input a title and URL into appropriate fields and when submit button is clicked, bookmark populates appropriate section
var titleField = $('.title').val();
var urlField = $('.url').val();

$('.submit').click( function() {
  titleField = $('.title').val();
  urlField = $('.url').val();
  createBookmark(titleField, urlField);
});

function createBookmark(x, y) {
  var newBookmark = "<section class='bookmark'><p class='titleResult'>"+titleField+"</p><p class='urlResult'>"+urlField+"</p><button type='button' class='mark'>Mark as Read?</button></section>";
  $('.bookmark-list').append(newBookmark);
}

// User clicks on "Mark as Read", class of '.read' is added to the title
// $('.mark').click( function() {
//   debugger;
//   if ($(".bookmark").hasClass(".read")) {
//     alert("hi");
//   }
//   else if (!$(".bookmark").hasClass(".read")) {
//     $(this).addClass('read');
//   }
// });

$(document).on('click', '.mark', function() {
  $(this).parent().toggleClass("read");
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

//If user omits 'title' or 'URL' display error message upon clicking submit

//PHASE THREE

//Disable button for creating links IF A field is blank
//Application should keep count of total number of links once they are submitted or removed
//Application should keep count of total number of read of unread links currently on the page

//PHASE FOUR
//Add a "clear read bookmarks" button which clears bookmarks
//User should not allow invalid 'URL' inputs
}); // end of master jQuery function
