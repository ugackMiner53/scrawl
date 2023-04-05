# ![Scrawl Logo](./public/icon.svg) Scrawl
A project to protect writing from plagiarism.

Check it out at the [online demo]() here!

## Features:
- Adds title, author, link, date, and a hash to the text
- Includes an "Anti-AI" mode which makes it so that artificial intelligence cannot understand the writing.

## How does it work?
There are some Unicode characters which are invisible and zero characters wide, which allow for data to be encoded and hidden inside of text in a way that is impossible to detect with a human eye.

The "Anti-AI" mode is in progress, and comes with some serious limitations that cause it to be easily reversible and break some accessibility tools (most notably screen readers). It works by replacing english characters in the input with Unicode characters which look similar. You can find some of these lookalikes on the [Unicode website](https://util.unicode.org/UnicodeJsps/confusables.jsp).

## Setup
Clone the repository and run `npm install` in order to setup Vite with Svelte and Typescript. You can then build the website with `npm run build`, or develop with `npm run dev`.

## Contributing:
To contribute to the repo, simply open a [pull request](https://github.com/ugackMiner53/scrawl/pulls) with your changes!