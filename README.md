# Chrome extension template with Vite, CRXJS, React, and DaisyUI

this is a chrome extension creation template packed with the following goodies:

- [Vite](https://vitejs.dev/): dev server automatically compile TS files with Hot Module Reload
- [CRXJS](https://crxjs.dev/vite-plugin): vite plugin for chrome extension creation
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/): tailwind component library
- [iconify](https://iconify.design): dev friendly icon collections

# Motivation

The developer experience(DX) of creating Chrome extension with Typescript is bad. We need to compile the ts file with `tsc` and restart the dev server every time the src files have changed.

Vite solves the problem by hot module reload, while CRXJS parse the manifest and generate the extension files.

This template pre-configured with React, Typescript, tailwindcss, DaisyUI and iconify, so you can create chrome extension with these handy tools out of the box.

# Usage

- click `use this template` button of this repo to create a new repo in your github account
- clone your repo to your local machine
- `pnpm i` to install the dependencies
- ⚠️ **change this README file** ⚠️
- read the documentation of [chrome extension](https://developer.chrome.com/docs/extensions/)
- a README template is provided FYR down below 👇

---

# Chrome Extension Name

> tagline here

[Download](https://url) @ Chrome Web Store

![screen cap](https://i.imgur.com/Ycfi8RSm.png)

## Features

- ...
- ...

## Usage

🎬 https://youtube/url

1. ...
2. ...
3. done 🎉

## Motivation

why u create this extension

## Technical Details

### How to build

```shell
git clone https://github.com/repo/url
cd repo-name
pnpm install
npm run build
```

### Run dev server

- `npm run dev`
- open `http://localhost:5173/xxx.html` in browser

### Tooling

Stack of modern web tech employed to enhance the code quality and DX.

- [Vite](https://vitejs.dev): dev server w/ hot module reload
- [CRXJS](https://crxjs.dev/vite-plugin): vite plugin that greatly enhance DX for creating chrome ext
- [Typescript](https://www.typescriptlang.org/): for better code quality
- [React](https://reactjs.org): xss protection, component creation and state management
- [tailwindCSS](https://tailwindcss.com): utility-first CSS framework
- [daisyUI](https://daisyui.com): tailwind component library, color theme
- [iconify](https://iconify.design): dev friendly icon collections

## Need Help?

Open a [github issue](https://github.com/repo/url/issues) or ping me on [Twitter](https://twitter.com/user)
