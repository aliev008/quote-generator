import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import randomColor from "./utils/randomColor";
import Quote from "./components/Quote/quote";
import Buttons from "./components/Buttons/buttons";
import "./index.scss";

const App = () => {
  console.log("App rendered");
  const [data, setData] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [color, setColor] = useState(randomColor());
  // const [opacity, setOpacity] = useState('1');
  // const [style, setStyle] = useState({
  //   opacity: "0",
  //   color: `${randomColor()}`,
  // });
  const [fade, setFade] = useState(true);

  useEffect(() => {
    console.log("UseEffect rendered");
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setColor(randomColor());
      });

    return () => {
      // setOpacity('0');
      setFade(!fade);
    };
  }, [buttonClicked]);

  function changeQuote() {
    console.log("Inside changequote");
    setButtonClicked((prev) => !prev);
    // setTimeout(() => {
    //   console.log(`opacity`, opacity)
    //   setOpacity('1');
    // }, 2000)
    // setStyle({ opacity: "1", color: `${randomColor()}` });
    // setTimeout(() => {
    //   setStyle({ opacity: "1", color: `${randomColor()}` });
    // }, 0);
  }

  if (data) {
    return (
      <div
        className="wrapper"
        // style={{ background: style.color, color: style.color }}
        style={{ background: color, color: color }}
      >
        <div id="quote-box">
          <Quote
            quote={data.content}
            author={data.author}
            // opacity={opacity}
            fade={fade}
          />
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
