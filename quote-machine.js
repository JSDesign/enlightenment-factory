// TODO: add Akin link http://spacecraft.ssl.umd.edu/akins_laws.html
// TODO: add better transitioning

'use strict';

import { quotes } from './quotes.js';

function randomQuote() {
  // need these html elements to target later
  const quote = document.getElementById('quoteText'),
        author = document.getElementById('quoteAuthor'),
        note = document.getElementById('quoteNote'),
        theButton = document.getElementById('theButton'),
        twit = document.getElementById('twit'),
        tweetLength = 217;

  let randomNum = Math.floor(Math.random() * quotes.length);
  let quoteText = quotes[randomNum]['quote'];

  let trimmedQuote;

  if (quoteText.length >= 220) {
    trimmedQuote = quoteText.substring(0, tweetLength) + '...';
  } else {
    trimmedQuote = quoteText;
  }

  const referrer = 'https://thatjeannie.me/enlightenment-factory';
  const href = 'https://twitter.com/intent/tweet?url=' + referrer + ';text=' + trimmedQuote + '+%40jeanniethings';

  quote.innerHTML = quoteText;
  author.innerHTML = quotes[randomNum]['author'];
  note.innerHTML = quotes[randomNum]['note'];
  twit.href = href;
}

window.addEventListener('load', function() {
  randomQuote();
}, false);
theButton.addEventListener('click', function() {
  randomQuote();
}, false);
