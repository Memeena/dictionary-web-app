import React from "react";
import { useState } from "react";
// Adding the svg Icons as React Components
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as IconMoon } from "../../assets/images/icon-moon.svg";
import { ReactComponent as IconArrowDown } from "../../assets/images/icon-arrow-down.svg";
//Importing styles using CSS Modules
import styles from "./Header.module.css";

export default function Header({
  fontStyle,
  setFontStyle,
  darkMode,
  setDarkMode,
}) {
  const [listOpen, setListOpen] = useState(false); //To check whether the arrow down is clicked for the drop down of font-style list

  //Setting the font-style useState DYNAMICALLY based on the user selection from the drop down list of font-styles
  function handleChangeFont(e) {
    e.target.innerText === "Mono"
      ? setFontStyle("Monospace")
      : e.target.innerText === "Sans Serif"
      ? setFontStyle("Sans-serif")
      : setFontStyle(e.target.innerText);
  }

  //Getting the fonts from font-style use State which user/default preferred and changing it to use it in the code Logic
  const selectedFont =
    fontStyle === "Monospace"
      ? "Mono"
      : fontStyle === "Sans-serif"
      ? "Sans Serif"
      : fontStyle;

  //Changing the styles DYNAMICALLY based on the user selection of change in Light/Dark mode theme
  const toggleStyle = {
    left: darkMode ? "2.3rem" : "0.1rem",
    transition: "all 0.3s ease-out",
  };

  const listDarkMode = {
    backgroundColor: darkMode ? "#1f1f1f" : "#ffffff",
    color: darkMode ? "#ffffff" : "#2d2d2d",
    boxShadow: darkMode
      ? "rgb(164 69 237) 0px 4px 20px"
      : "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div className={styles.header}>
      {/* Using the SVG Element as React Component */}
      <Logo className={styles.logo} />
      <div className={styles.fontSelect}>
        <div
          className={styles.dropDown}
          onClick={() => setListOpen((prev) => !prev)}
        >
          <span
            className={styles.selected}
            style={{ color: darkMode ? "#ffffff" : "#2d2d2d" }}
          >
            {selectedFont}
          </span>
          {/* Using the SVG Element as React Component */}
          <IconArrowDown className={styles.iconArrowDown} />
        </div>

        {listOpen && (
          <ul className={styles.list} style={listDarkMode}>
            <li className={styles.item} onClick={handleChangeFont}>
              Sans Serif
            </li>
            <li className={styles.item} onClick={handleChangeFont}>
              Serif
            </li>
            <li className={styles.item} onClick={handleChangeFont}>
              Mono
            </li>
          </ul>
        )}
      </div>

      <div className={styles.seperator}></div>

      {/* To check for toggle in the Light/Dark theme switch  */}
      <div className={styles.iconToggle}>
        <div
          className={styles.rectangle}
          onClick={() => setDarkMode((prev) => !prev)}
          style={{ backgroundColor: darkMode ? "#a445ed" : "#757575" }}
        >
          <div className={styles.oval} style={toggleStyle}></div>
        </div>
      </div>

      {/* Using the SVG Element as React Component */}
      <IconMoon
        className={styles.iconMoon}
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          stroke: darkMode ? "#a445ed" : "#838383",
          fill: darkMode ? "#050505" : "none",
        }}
      />
    </div>
  );
}
