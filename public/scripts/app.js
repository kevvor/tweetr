$(document).ready(function() {

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "<script>alert('uh oh!');</script>"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
  buttons.addClass("buttons hidden");
  buttons.append(flag, retweet, heart);

  footer.text(data.created_at);

  let $tweet = article.append(header, tweetContent, footer, buttons);

  return $tweet;
}

function renderTweets(arrayOfTweets) {
  for (let tweet of arrayOfTweets) {
     $(".tweet-container").append(createTweetElement(tweet));
  }
}

renderTweets(data);

});
















