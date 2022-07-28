import React from "react";
import styles from "./quote.module.scss";

const Quote = ({ quote, author, opacity, fade}) => (
  <>
    <figure className={styles.quote__section}>
      <blockquote className={fade ? 'fade-in' : 'fade-out'} style={{opacity: opacity}}>
        <i className="fa-solid fa-quote-left"></i>
        {" " + quote}
      </blockquote>
      <figcaption className={fade ? 'fade-in' : 'fade-out'} style={{opacity: opacity}}>{"- " + author}</figcaption>
    </figure>
  </>
);

export default Quote;
