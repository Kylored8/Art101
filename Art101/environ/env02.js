let count = 0;
$("#slug-button").click( function() {
   count = count + 1;
   $("#slug-button").html( "You have " + count + " dollars.");
});
