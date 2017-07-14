$(document).ready(function() {

const maxCharacterLength = 140;

let text = $('#tweet-field');

text.on("input", function(event) {
  $(this).siblings('#count').text(maxCharacterLength - this.value.length)
  if (this.value.length > maxCharacterLength) {
    $(this).siblings('#count').addClass("count-red");
  }
  else {
    $(this).siblings('#count').removeClass("count-red");
  }
});

});