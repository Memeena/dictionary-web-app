import React from "react";
import { useState, useEffect } from "react";
import styles from "./Result.module.css";
import { ReactComponent as IconAudio } from "../../assets/images/icon-play.svg";
import { ReactComponent as IconNewWindow } from "../../assets/images/icon-new-window.svg";
import SubSection from "./SubSection";

export default function Result({ result, fontStyle, darkMode }) {
  //Destructuring from the result state variable
  const [{ phonetic, word, sourceUrls, meanings, phonetics }] = result;

  //Destructuring the elements if the partOfSpeech is "noun"
  const { partOfSpeech, definitions, synonyms } = meanings.filter(
    (def) => def.partOfSpeech === "noun"
  )[0];

  //Setting the state variable for audio
  const [noAudio, setNoAudio] = useState(false);

  //Getting the audio from the phonetics element in the result variable
  //Using the optional chaining method to allow if there is an error,an undefined variable is returned
  const url = phonetics.find((i) => i.audio)?.audio;

  //Setting the noAudio to true if there is no audio variable from the result element
  useEffect(() => {
    !url && setNoAudio(true);
  }, [url]);

  //Handling the audio element
  function handleAudio() {
    if (noAudio === false) {
      const audio = new Audio(url);
      audio.play();
    }
  }

  //Handling the styles dynamically to check the font style and change the font stlye of the synonym element
  //If the main font style is "sans-serif", the synonym font style is "Inter"
  //If the main font style is "serif", the synonym font style is "Lora"
  //If the main font style is "Monospace", the synonym font style is "Inconsolata"
  const synonymFont = {
    fontFamily:
      fontStyle === "Sans-serif"
        ? `"Inter",sans-serif`
        : fontStyle === "Serif"
        ? `"Lora",serif`
        : `"Inconsolata", monospace`,
  };

  //Handling the styles DYNAMICALLY to accomodate the Light/Dark mode switch
  const darkModeColor = {
    color: darkMode ? "#ffffff" : "#2d2d2d",
  };

  return (
    <div className={styles.result}>
      <div className={styles.header}>
        <div className={styles.headingMain}>
          <h1 className={styles.heading} style={darkModeColor}>
            {word}
          </h1>
          <p className={styles.phonetic}>{phonetic}</p>
        </div>
        <div className={styles.audio}>
          <IconAudio className={styles.iconAudio} onClick={handleAudio} />
        </div>
      </div>

      {/* Calling the SubSection component to render the noun section */}
      <div className={styles.noun}>
        <SubSection
          partOfSpeech={partOfSpeech}
          definitions={definitions}
          synonyms={synonyms}
          synonymFont={synonymFont}
          darkMode={darkMode}
        />
      </div>

      {/* Calling the SubSection component to render the verb section */}
      <div className={styles.verb}>
        {meanings
          .filter((def) => def.partOfSpeech === "verb")
          .map((data, i) => {
            const { partOfSpeech, definitions } = data;
            return (
              <SubSection
                key={i + 1}
                partOfSpeech={partOfSpeech}
                definitions={definitions}
                darkMode={darkMode}
              />
            );
          })}
      </div>

      {/* Rendering Source element */}
      <div
        className={styles.sourceUrls}
        style={{
          borderTop: darkMode ? "1px solid #3a3a3a" : "1px solid #e9e9e9",
        }}
      >
        <p className={styles.source}>Source</p>
        <a href={sourceUrls} className={styles.sourceUrl} style={darkModeColor}>
          {sourceUrls[0]}

          <IconNewWindow className={styles.iconnewWindow} />
        </a>
      </div>
    </div>
  );
}
