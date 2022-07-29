import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import randomColor from "./utils/randomColor";
import Quote from "./components/Quote/quote";
import Buttons from "./components/Buttons/buttons";
import "./index.scss";

const App = () => {
  const [data, setData] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(true);
  const [color, setColor] = useState(randomColor());
  const [opacity, setOpacity] = useState("1");

  useEffect(() => {
    console.log("Inside UseEffect");
    setTimeout(() => {
      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          setData(() => {
            console.log(`inside setData`);
            return data;
          });
          setOpacity("1");
        });
    }, 2000);
  }, [buttonClicked]);

  function changeQuote() {
    console.log("Inside changequote");
    setOpacity("0");
    setColor(() => randomColor());
    setButtonClicked((prev) => !prev);
  }
  console.log("App component rendered");

  if (data) {
    return (
      <div className="wrapper" style={{ background: color, color: color }}>
        <div id="quote-box">
          <Quote quote={data.content} author={data.author} opacity={opacity} />
          <Buttons
            changeQuote={changeQuote}
            color={color}
            quote={data.content}
            author={data.author}
          />
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
