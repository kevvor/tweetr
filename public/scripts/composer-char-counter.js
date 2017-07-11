$(document).ready(function() {

let text = $('#tweet-field');

text.on("input", function(event) {
  $(this).siblings('#count').text(140 - this.value.length)
  if (this.value.length > 140) {
    $(this).siblings('#count').addClass("count-red");
  } else {
    $(this).siblings('#count').removeClass("count-red");
  }
});

});

