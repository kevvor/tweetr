$(document).ready(function() {

const maxCharacterLength = 140;

function timeSince(date) {

  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

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

  footer.text(timeSince(data.created_at) + ' ago');

  let $tweet = article.append(header, tweetContent, footer, buttons);

  return $tweet;
};

function renderTweets(arrayOfTweets) {
  for (let tweet of arrayOfTweets) {
    $(".tweet-container").prepend(createTweetElement(tweet));
  }
};

function refreshTweetBox() {
  $('#tweet-field').val('');
  $('#count').text(maxCharacterLength);
};

$('.tweet-form').on('submit', function(event) {
  event.preventDefault();
  if ($('#tweet-field').val().length > maxCharacterLength) {
    return alert('Write something less than 140 characters long!')
  }
  else {
  $.ajax({
    method: 'POST',
    url: '/tweets',
    data: $(this).serialize()
  }).done(function(data) {
    renderTweets([data]);
    refreshTweetBox();
  })
  }
});

function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function(data) {
      renderTweets(data);
    }
  })
};

loadTweets();

});















