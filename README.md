# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Screen Shot 2022-08-17 at 14 55 24](https://user-images.githubusercontent.com/98545971/185220326-05fb5b94-f3bc-4919-addf-8df43d5f5966.png)

![Screen Shot 2022-08-17 at 14 56 14](https://user-images.githubusercontent.com/98545971/185220448-2c4d3668-2a77-4548-9da7-83f0417ba0a3.png)

### Links

- Solution URL: [Github repo](https://github.com/teoh4770FrontEndMentor/intro-component-with-signup-form-master)
- Live Site URL: [Link to live view](https://teoh4770frontendmentor.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript + Regex

### What I learned

```
function validEmail(email) {
  let isValid = false;
  if(email) {
    isValid =  (/^[^\s@]+@[^\s@]+\.[tld]+$/).test( email );
  }
  console.log(isValid);
  return isValid;
}
```
Second encounter with Regex, I finally understand what Regex used for and what each character meant.
Also work on form and validation in HTML.

### Continued development

I would like to improve my understanding of Regex concept, and use JavaScript, it is so much fun lol.

### Useful resources

- [Regex101](https://regex101.com/) - Regex101 helps me test out and understand the regex code.
- [Fireship IO Regex 100 seconds explained](https://youtu.be/sXQxhojSdZM) - This is a short video about regex 101.

