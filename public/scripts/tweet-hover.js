$(document).ready(function() {

let tweet = $('.tweet')

console.log(tweet)

tweet.on("click", function (event) {
  console.log('here');
  $(this).find('.tweet-buttons').removeClass("hidden");
});

tweet.on("mouseleave", function (event) {
  $(this).find('.tweet-buttons').addClass("hidden");
});

});