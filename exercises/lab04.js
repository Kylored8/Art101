let count = 0;

let buttonCreature = {
    name: "The slug of magic",
    species: "Magical mollusk",
    favoriteFood: "Interaction",
    moods: ["gratious", "appriciated", "glowing", "needy", "grateful", "sleepy"]
};
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

   let message = "<p>You clicked me " + count + " times.</p>";
message = message + "<p>My name is " + buttonCreature.name + ".</p>";
message = message + "<p>I am an " + buttonCreature.species + ".</p>";
message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});