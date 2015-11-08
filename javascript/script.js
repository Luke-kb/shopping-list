function addListItem() {
    var inputText = $("#input-item").val();
    $("#list-view").append('<li class="new-item">' + inputText + '<button class="delete">' + 'x' + '</button>' + '</li>');
      //set input form to empty string
    $("#input-item").val(''); 
}


$(document).ready(function() {

// //delete list item
$(document).on('click', '.delete', function() {
  $(this).closest("li").remove();
})

//run addListItem function on submit event
  $("form").on('submit', function(submitEvent) {
    addListItem();
    submitEvent.preventDefault(); 
    });

//mark list item as complete
$("#list-view").on('click', 'li', function() {
  $(this).toggleClass("completed");
})

//hide&show delete button
$(document).on('mouseenter', 'li.new-item', function() {
  $(this).find("button.delete").show();
});
$(document).on('mouseleave', 'li.new-item', function() {
  $(this).find("button.delete").hide();
});

});