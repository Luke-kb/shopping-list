function addListItem() {
    var inputText = $("#list-item").val();
    $("#list").append('<li>' + inputText + '<button class="delete">' + 'x' + '</button>' + '</li>');
      //set input form to empty string
    $("#list-item").val(''); 
}


$(document).ready(function() {

// //delete list item
$(document).on('click', '.delete', function() {
  $(this).closest().remove();
});

//run addListItem function on submit event
  $("form").on('submit', function(submitEvent) {
    addListItem();
    submitEvent.preventDefault(); 
    });


});