import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SearchWord from "./components/SearchWord/SearchWord";
import Result from "./components/Result/Result";
import Error from "./components/SearchWord/ErrorPage";
import "./App.css";

function App() {
  const [fontStyle, setFontStyle] = useState("sans-serif"); //To handle the change in the font-style
  const [enteredWord, setEnteredWord] = useState(""); //To check for the entered Text
  const [err, setErr] = useState({
    err: false,
    title: "",
    resolution: "",
    message: "",
  }); //To handle and display Error
  const [result, setResult] = useState(""); //To store the Result fetched from API
  const [darkMode, setDarkMode] = useState(false); //To handle Light/Dark mode switch

  //Checks for font-style change and apply the same to the body of the element.
  useEffect(() => {
    document.body.style.fontFamily = fontStyle;
  }, [fontStyle]);

  //To check the system preference for Light/Dark mode using prefers-color-scheme
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        console.log(colorScheme);
        colorScheme === "dark" ? setDarkMode(true) : setDarkMode(false);
      });
  }, []);

  //To change the background-color of the component when there is Light/Dark mode switch
  useEffect(() => {
    const setbg = darkMode ? "#050505" : "#ffffff";
    document.body.style.backgroundColor = setbg;
  }, [darkMode]);

  return (
    <div className="App">
      {/* Handles Header components */}
      <Header
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {/* Handles the Words to be searched */}
      <SearchWord
        className="search"
        enteredWord={enteredWord}
        setEnteredWord={setEnteredWord}
        result={result}
        setResult={setResult}
        err={err}
        setErr={setErr}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {/* Handles the display of Error */}
      {err.err && (
        <Error
          title={err.title}
          resolution={err.resolution}
          message={err.message}
          darkMode={darkMode}
        />
      )}

      {/* Handles the display of Result */}
      {result.length !== 0 && (
        <Result result={result} fontStyle={fontStyle} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;
