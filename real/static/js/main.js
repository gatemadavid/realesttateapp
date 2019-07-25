const date = new Date();
document.querySelector(".year").innerHTML = date.getFullYear();

setTimeout(function () {
  $("#message").fadeOut("slow");
}, 3000);

$(".txtb input").on("focus", function () {
  $(this).addClass("focus");

});
$(".txtb input").on("blur", function () {
  if ($(this).val() == "")
    $(this).removeClass("focus");

});