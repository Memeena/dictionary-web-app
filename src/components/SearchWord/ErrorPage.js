import React from "react";
import errorIcon from "../../assets/images/error.png";
import styles from "./ErrorPage.module.css";

export default function Error({ message, resolution, title, darkMode }) {
  return (
    <div className={styles.error}>
      <img src={errorIcon} alt="error-emoji" className={styles.iconError}></img>
      <h2
        className={styles.title}
        style={{ color: darkMode ? "#ffffff" : "#2d2d2d" }}
      >
        {title}
      </h2>
      <p className={styles.message}>
        {message}
        {resolution}
      </p>
    </div>
  );
}
