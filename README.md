# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![Link](https://clipchamp.com/watch/YeLxtDy8Z64)

### Links

- Solution URL: [Solution URL](https://your-solution-url.com)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [CSS Modules - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- Using SVG icons as React Components which enables us to easily modify the image. Usage of "current" for the fill and stroke attributes

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 22 22"
  fill="current"
>
  <path
    stroke="current"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
    fill="current"
  />
</svg>
```

- Updating the font of the element using UseEffect Hook.

```js
useEffect(() => {
  document.body.style.fontFamily = fontStyle;
}, [fontStyle]);
```

- Used optional chaining for getting the audio file from the result data fetched from API to avoid error. Instead of error, it returs the value as "undefined".

```js
const url = phonetics.find((i) => i.audio)?.audio;
```

- Using prefers-color-scheme to get the device selected colour theme and switching the Light/Dark theme accordingly.

```js
useEffect(() => {
  window
    .matchMedia("(prefers-color-scheme:dark)")
    .addEventListener("change", (event) => {
      const colorScheme = event.matches ? "dark" : "light";
      console.log(colorScheme);
      colorScheme === "dark" ? setDarkMode(true) : setDarkMode(false);
    });
}, []);
```

- Learnt to use dynamic styles based on the user input like theme switch, font-change.

```js
const toggleStyle = {
  left: darkMode ? "2.3rem" : "0.1rem",
  transition: "all 0.3s ease-out",
};
```

- Learnt how to module the components which is important in React. And also how to pass variables as props and traversing from child to parent to update the state variables which are used in the parent.

### Continued development

Planning to improve the above challenge to get the input via speech and converting it to text and finding the result.

### Useful resources

- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) - This helped to learn about optional chaining and how to use in this challenge.
- [prefers-color-scheme](https://web.dev/prefers-color-scheme/) - This helped me how to handle dark mode in React and how to use prefers-color-scheme to attain the same.

## Author

- Frontend Mentor - [@meMeena](https://www.frontendmentor.io/profile/meMeena)
- Twitter - [@Mekrish18](https://www.twitter.com/MeKrish18)
