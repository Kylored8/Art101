let count = 0;
let colorIndex = 0;
let mood;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
function paintPage(color) {
   $("body").css("background-color", color);
      console.log(color);

}
$(".color-circle").click(function() {
   paintPage(this.id);
});

$(".color-circle").click(function() {
   paintPage(this.id);
});
$(".color-circle").click(function() {
   paintPage(this.id);
});

$("#needy-button").click(function () {
   if (count < 5) { mood = "fresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired!"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorIndex] + " - " + mood);
paintPage(colors[colorIndex
]);


   count = count + 1;
   colorIndex = colorIndex + 1;
   if (colorIndex == 4) { colorIndex = 0; } 
});
