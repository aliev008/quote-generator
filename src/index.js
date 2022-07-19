import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import randomColor from "./utils/randomColor";

const App = () => {
  console.log("App rendered");
  const [data, setData] = useState(null);
  const [color, setColor] = useState(randomColor);
  const [buttonClicked, setButtonClicked] = useState(false);
  let opacity = 1;

  useEffect(() => {
    console.log("UseEffect rendered");
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [buttonClicked]);

  function changeQuote() {
    opacity = 0;
    setTimeout(() => {
      opacity = 1;
      setColor(randomColor());
    }, 500);
    setButtonClicked((prev) => !prev);
  }

  if (data) {
    return (
      <div className="wrapper" style={{ backgroundColor: color, color: color }}>
        <div id="quote-box">
          <figure>
            <blockquote id="text" style={{ opacity: opacity }}>
              <i className="fa-solid fa-quote-left"></i>
              {' ' + data.content}
            </blockquote>
            <figcaption id="author" style={{ opacity: opacity }}>
              {'- ' + data.author}
            </figcaption>
          </figure>
          <div className="buttons-section">
            <a id="tweet-quote" href="" target="_blank">
              <button style={{ backgroundColor: color }} className="btn">
                <i className="fa-brands fa-vk fa-2x"></i>
              </button>
            </a>
            <a id="new-quote">
              <button
                style={{ backgroundColor: color }}
                className="btn"
                onClick={changeQuote}
              >
                New Quote
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

//---------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* <React.StrictMode> */
  <App />
  /* </React.StrictMode> */
);
