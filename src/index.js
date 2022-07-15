import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  console.log('App rendered');
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  const [data, setData] = useState(null);
  const [currentQuote, setCurrentQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState(randomColor);
  const [color, setColor] = useState(randomColor)
  const [opacity, setOpacity] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    console.log('UseEffect rendered');
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => setData(data))}, [buttonClicked]);

  function changeQuote() {
        setOpacity(0);
        setTimeout(() => {
          setCurrentQuote(' ' + data.content);
          setOpacity(1);
          setAuthor('- ' + data.author);
        }, 1000);
        setColor(randomColor);
        setBackgroundColor(randomColor);
        setButtonClicked((prev) => !prev);
      }

  return (
    <div className='wrapper' style={{backgroundColor: backgroundColor, color: color}}>
      <div id="quote-box">
          <figure>
          <blockquote id="text" style={{opacity: opacity}}><i className="fa-solid fa-quote-left"></i>{currentQuote}</blockquote>
          <figcaption id="author" style={{opacity: opacity}}>{author}</figcaption>
          </figure>
        <div className="buttons-section">
          <a id="tweet-quote"  href="twitter.com/intent/tweet" target="_blank"><button style={{backgroundColor: backgroundColor}} className="btn"><i className="fa-brands fa-vk fa-2x"></i></button></a>
          <a id="new-quote" ><button style={{backgroundColor: backgroundColor}} className="btn" onClick={changeQuote}>New Quote</button></a>
        </div>
      </div>
    </div>
  )
}

//---------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* <React.StrictMode> */
    <App />
  /* </React.StrictMode> */
);
