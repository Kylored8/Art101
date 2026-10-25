let count = 0;
let worth = 1
let MagicalSlug = {
   worth: 1,
   species: "Magical mollusk",
moods: ["gratious", "appriciated", "glowing", "needy", "grateful", "sleepy"]
};
let arrayPosition = -1;

$("#slug-button").click( function() {
   count = count + worth;

arrayPosition = arrayPosition + 1

   let CurrentMood = MagicalSlug.moods[arrayPosition];
  let message = "<p> you have " + count + " dollar(s) and the slug is " + CurrentMood + ". </p>"
 
   $("#output").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(CurrentMood);
});
