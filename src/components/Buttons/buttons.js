import React from "react";
import styles from "./buttons.module.scss";
import authHandler from "../../utils/vkAPI";

const Buttons = ({ changeQuote, color, quote, author, sayText }) => {
  let text = `${quote} \n - ${author}.`;

  return (
    <div className={styles.buttons__section}>
      <button style={{ backgroundColor: color }} onClick={() => sayText(text)}>
        Play Text of The Quote <i class="fa-solid fa-circle-play fa-2x"></i>
      </button>
      <button
        onClick={() => authHandler(text)}
        style={{ backgroundColor: color }}
      >
        Post Quote on VK Wall <i className="fa-brands fa-vk fa-2x"></i>
      </button>
      <button style={{ backgroundColor: color }} onClick={changeQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
