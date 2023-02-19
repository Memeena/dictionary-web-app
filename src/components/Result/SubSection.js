import React from "react";
import styles from "./SubSection.module.css";

export default function SubSection({
  partOfSpeech,
  definitions,
  synonyms,
  synonymFont,
  darkMode,
}) {
  return (
    <div className={styles.meaning}>
      <div className={styles.header}>
        <i
          className={styles.heading}
          style={{ color: darkMode ? "#ffffff" : "#2d2d2c" }}
        >
          {partOfSpeech}
        </i>
        <div
          className={styles.line}
          style={{ backgroundColor: darkMode ? "#3a3a3a" : "#e9e9e9" }}
        ></div>
      </div>

      <div className={styles.content}>
        <p className={styles.contentHeading}>Meaning</p>

        <ul className={styles.list}>
          {definitions.map((def, i) => {
            return (
              <li className={styles.item} key={i}>
                <span
                  className={styles.span}
                  style={{ color: darkMode ? "#ffffff" : "#2d2d2d" }}
                >
                  {def.definition}
                </span>

                {partOfSpeech === "verb" && def.example && (
                  <q className={`${styles.span} ${styles.example}`}>
                    {def.example}
                  </q>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {partOfSpeech === "noun" && (
        <div className={styles.synonyms}>
          <p className={styles.contentHeading}>Synonyms</p>
          <p className={styles.synonym} style={synonymFont}>
            {synonyms.map((i) => i + " ")}
          </p>
        </div>
      )}
    </div>
  );
}
