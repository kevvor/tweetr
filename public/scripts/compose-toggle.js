$(document).ready(function() {

$('.nav-buttons').on("click", function () {
  $('.new-tweet').slideToggle("slow").find("#tweet-field").focus().scrollTop();
});

});
