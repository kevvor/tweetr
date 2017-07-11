$(document).ready(function() {

let tweetContainer = $('.tweet-container')

tweetContainer.on("mouseenter", function (event) {
  $(this).find('.buttons').removeClass("hidden");
});

tweetContainer.on("mouseleave", function (event) {
  $(this).find('.buttons').addClass("hidden");
});

});