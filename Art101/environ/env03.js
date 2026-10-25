let count = 0;
$("#slug-button").click( function() {
   count = count + 1;
   
   $(".message").html(count);
});
