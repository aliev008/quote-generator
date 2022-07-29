import React from "react";
import styles from "./quote.module.scss";

const Quote = ({ quote, author, opacity }) => (
  <>
    <figure className={styles.quote__section}>
      <blockquote style={{ opacity: opacity }}>
        <i className="fa-solid fa-quote-left"></i>
        {" " + quote}
      </blockquote>
      <figcaption style={{ opacity: opacity }}>{"- " + author}</figcaption>
    </figure>
  </>
);

export default Quote;
