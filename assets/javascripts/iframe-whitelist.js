(function() {
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.thunderclap\.it\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.kickstarter\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.surveymonkey\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.change\.org\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.sumame\.co\/.+/i);
})();
