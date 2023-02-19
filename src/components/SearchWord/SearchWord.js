import React, { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as IconSearch } from "../../assets/images/icon-search.svg";
import styles from "./SearchWord.module.css";

export default function SearchWord({
  enteredWord,
  setEnteredWord,
  result,
  setResult,
  err,
  setErr,
  darkMode,
  setDarkMode,
}) {
  const [error, setError] = useState({ error: false, msg: "" });

  //To reset the Error state
  useEffect(() => {
    setError({ error: false, msg: "" });
  }, [enteredWord]);

  function handleEnteredWord(e) {
    setEnteredWord(e.target.value); //Setting the entered word to the state the variable

    //Resetting the state of Error and Result variables
    setErr({ err: false, title: "", resolution: "", message: "" });
    setResult("");
  }

  //Fetching from API using Asyunc function
  async function fetchAPI(word) {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();
      if (!data.message) {
        setResult(data);
      } else {
        //Setting the Error state if there is no data available from the API
        setErr((prev) => {
          return {
            ...prev,
            err: true,
            title: data.title,
            message: data.message,
            resolution: data.resolution,
          };
        });
      }
    } catch (err) {
      //Setting the Error state if there is a different status code from the Fetch API function
      setErr((prev) => {
        return {
          ...prev,
          err: true,
          title: "Could not fetch from API",
          message: err,
          resolution: "Please try again later..",
        };
      });
    }
  }

  //Handling the Search after click of the Search Icon
  function handleSearch(e) {
    e.preventDefault();

    //If there is no word entered in the input field
    if (!enteredWord) {
      setError({ error: true, msg: "Whoops, can't be empty..." });
      setResult("");
      return;
    }

    //Fetching from API
    fetchAPI(enteredWord);

    //Clearing the input field
    setEnteredWord("");
  }

  //Setting the input styles dynamically
  const inputStyle = {
    border: error.error ? "1px solid #ff5252" : "",
    backgroundColor: darkMode ? "#1f1f1f" : "#f4f4f4",
    color: darkMode ? "#ffffff" : "#2d2d2d",
  };

  return (
    <>
      <form className={styles.searchWord}>
        <label htmlFor="word"></label>
        <input
          id="word"
          className={styles.inputField}
          type="text"
          placeholder="Search for any word..."
          onChange={handleEnteredWord}
          value={enteredWord}
          style={inputStyle}
        ></input>

        <IconSearch className={styles.iconSearch} onClick={handleSearch} />

        {/* If there is an empty input field displaying the error message */}
        {error.error && <p className={styles.error}>{error.msg}</p>}
      </form>
    </>
  );
}
