import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quoteInfo, setQuoteInfo] = useState('');


  useEffect(() => {
    getQuote();
  },[]);
  const getQuote = () =>{
    fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuoteInfo({
        text: data.content,
        author: data.author
      })
    })
  }


  return (
    <div id="quote-box">
      <p id="text">{quoteInfo.text}</p>
      <p id="author">{quoteInfo.author}</p>
      <button id="new-quote" onClick={getQuote}>New Quote</button>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quoteInfo.text}" - ${quoteInfo.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer" id="tweet-quote"> tweet</a>
    </div>
    

  
  );
}

export default App;
