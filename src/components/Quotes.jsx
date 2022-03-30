import { quotesDB } from "../db/quotesDB";
import "./component-css/quotes.css";

const randomQuote = () => {
  const randomNum = Math.floor(Math.random() * quotesDB.length);
  return quotesDB[randomNum];
};

export const Quotes = () => {
  const quote = randomQuote();
  return (
    <div className="quotes">
      <div className="quote-text">{quote.quoteText}</div>
      <div className="quote-author">{quote.quoteAuthor}</div>
    </div>
  );
};
