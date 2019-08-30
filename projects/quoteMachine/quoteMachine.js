const quotesArray = [
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder"
  },
  {
    quote:
      "Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult.",
    author: "APJ Abdul Kalam"
  },
  {
    quote:
      "There is nothing more powerful in the world than the idea that came in time.",
    author: "Victor Hugo"
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    quote:
      "Never bend your head. Always hold it high. Look the world straight in the eye. ",
    author: "Helen Keller"
  },
  {
    quote:
      "When you want something, all the universe conspires in helping you to achieve it.",
    author: "Paulo Coelho"
  },
  {
    quote:
      "Victory is not always winning the battle...but rising every time you fall.",
    author: "Napoleon Bonaparte"
  },
  {
    quote:
      "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.",
    author: "Socrates"
  },
  {
    quote: "It is not in the stars to hold our destiny but in ourselves.",
    author: "William Shakespeare"
  }
];
let quoteIndex = Math.floor(Math.random() * quotesArray.length);
const getNewQuote = () => {
  $("#text").html(quotesArray[quoteIndex].quote);
  $("#author").html(quotesArray[quoteIndex].author);
};
$(document).ready(() => {
  getNewQuote();
});
$("#new-quote").click(() => {
  quoteIndex = Math.floor(Math.random() * quotesArray.length);
  getNewQuote();
});
$("#tweet-quote").click(() => {
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?text=" +
      '"' +
      quotesArray[quoteIndex].quote +
      '"' +
      quotesArray[quoteIndex].author
  );
});
