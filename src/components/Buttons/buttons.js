import React from "react";
import styles from "./buttons.module.scss";
import authHandler from "../../utils/vkAPI";

const Buttons = ({ changeQuote, color, quote, author }) => {
  let text = `${quote} \n - ${author}.`;

  return (
    <div className={styles.buttons__section}>
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
