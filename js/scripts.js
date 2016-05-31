// $("button#1").click(function() {
//   $("#1").show();
//   $("#21").show();
// });
//
// $("button#21").click(function() {
//   $("#21").show();
//   $("#1").show()
// });


$("button#1").click(function() {
  $("#initially-shown").slideToggle();
  $("#initially-hidden").toggle();
});

$("button#21").click(function() {
  $("#initially-hidden").slideUp();
  $("#initially-shown").toggle()
});
