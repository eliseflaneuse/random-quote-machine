import React, {useState} from 'react';
import './App.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const [quote, setQuote] = useState("If you want me again look for me under your boot-soles.");
  const [author, setAuthor] = useState("Walt Whitman");

  const quotes = [
    {quote: "If you want me again look for me under your boot-soles.", author: "Walt Whitman",},
    {quote: "Resist much, obey little.", author: 'Walt Whitman', },
    {quote:"All truly great thoughts are conceived while walking.", author: 'Friedrich Nietzsche',},
    {quote: "Everywhere is walking distance if you have the time.", author: ' Steven Wright',},
  ];

  const genRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setQuote(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <div id="text-container">
          <p id="text">"{quote}"</p>
          </div>
          <div id="out">
          <p id="author">- {author}</p>
          </div>
          <div id="click">
          <a href={`http://www.twitter.com/intent/tweet?text=${quote} -${author}`} rel="noreferrer" target="_blank" id="tweet-quote" alt="twitter" title="Tweet this quote!"><FontAwesomeIcon icon={faTwitter} />
</a>
          <button id="new-quote" onClick={()=>genRandomNumber()}>New quote</button>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
