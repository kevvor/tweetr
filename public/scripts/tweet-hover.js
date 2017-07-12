$(document).ready(function() {

let tweet = $('.tweet')

tweet.on("mouseenter", function (event) {
  $(this).find('.buttons').removeClass("hidden");
});

tweet.on("mouseleave", function (event) {
  $(this).find('.buttons').addClass("hidden");
});

});