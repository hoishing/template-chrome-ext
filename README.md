# Chrome extension template with Vite, CRXJS, React, and DaisyUI

this is a chrome extension creation template packed with the following goodies:

- [Vite](https://vitejs.dev/)
- [CRXJS](https://crxjs.dev/vite-plugin) - vite plugin for chrome extension creation
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/) - tailwind component library

# why

The developer experience(DX) of creating Chrome extension with Typescipt is bad. We need to compile the ts file with `tsc` and restart the dev server everytime ts file has changed. 

Vite solves the problem by hot module reload. CRXJS parse the manifest and generate the extension files.

This template pre-configured with React, Typescipt, tailwindcss and DaisyUI, so you can create chrome extension with these handy tools out of the box.