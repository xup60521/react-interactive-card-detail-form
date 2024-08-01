# **Frontend Mentor Challenge - Interactive card details form**

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw "https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw").

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        -   [react-hook-form](#react-hook-form)
-   [Resources](#resources)

## Overview

Users should be able to:

-   Fill in the form and see the card details update in real-time

-   Receive error messages when the form is submitted if:

    -   Any input field is empty

    -   The card number, expiry date, or CVC fields are in the wrong format

-   View the optimal layout depending on their device's screen size

-   See hover, active, and focus states for interactive elements on the page

Links:

-   GitHub Repo: <https://github.com/xup60521/react-interactive-card-detail-form>

-   Website: <https://xup60521.github.io/react-interactive-card-detail-form/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

-   React (powered by vite)

-   TailwindCSS

-   react-hook-form + @hookform/error-message

-   framer-motion

### What I learned

#### react-hook-form

This is my first time using `react-hook-form`, and it was a pleasant experience.

In vanilla JS, I need to manually write all the validation function. With `react-hook-form`, though I still need to write the regex, dealing with error and access to data are much simpler.

The most noticeable part is that I no longer need to define all the `useState` or `useRef`. This package has already handled that.

Even though I used `@hookform/error-message`, when working on this project, I realized that the error message can be displayed by using conditional render.

```tsx
function App() {
  { formState: { errors } } = useForm();
  return(
    <>
        {"name" in errors && <p>error message</p>}
    </>
    )
}
```

But I was too lazy to refactor the code. I kept using `<ErrorMessage>` component.

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google font - <https://fonts.google.com>

-   react-hook-form docs - <https://react-hook-form.com/docs>