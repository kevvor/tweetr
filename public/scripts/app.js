$(document).ready(function() {

function createTweetElement(data) {
  let article = $("<article>").addClass("tweet")
  let header = $("<header>");
  let avatar = $("<img>");
  let fullName = $("<h2>");
  let handle = $("<span>");
  let tweetContent = $("<div>");
  let tweet = $("<p>")
  let footer = $("<footer>");
  let buttons = $("<span>");
  let flag = $("<i>");
  let retweet = $("<i>");
  let heart = $("<i>");

  fullName.text(data.user.name);
  handle.text(data.user.handle);
  handle.addClass("handle");
  avatar.attr('src', data.user.avatars.small);
  header.append(avatar, fullName, handle);

  tweet.addClass("tweet-content");
  tweet.text(data.content.text);
  tweetContent.append(tweet);

  flag.addClass("fa fa-flag");
  retweet.addClass("fa fa-retweet");
  heart.addClass("fa fa-heart");
  buttons.addClass("tweet-buttons");
  buttons.append(flag, retweet, heart);

  footer.text(data.created_at);

  let $tweet = article.append(header, tweetContent, footer, buttons);

  return $tweet;
}

function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function (data) {
      renderTweets(data);
    }
  })
}

function renderTweets(arrayOfTweets) {
  for (let tweet of arrayOfTweets) {
    $(".tweet-container").prepend(createTweetElement(tweet));
  }
}

$('.tweet-form').on('submit', function (event) {
  event.preventDefault();
  if ($('#tweet-field').val().length > 140) {
    return alert('Write something less than 140 characters!')
  }
  else {
  $.ajax({
    method: 'POST',
    url: '/tweets',
    data: $(this).serialize()
  }).done(function (data) {
    renderTweets([data]);
    $('#tweet-field').val(''); //can you load just the last instead of the whole database every time?
  });
  }
});

loadTweets();

$('.nav-buttons').on("click", function () {
  $('.new-tweet').slideToggle("medium").find("#tweet-field").focus().scrollTop();
});


});















