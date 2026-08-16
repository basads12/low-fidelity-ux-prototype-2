
  # Low-Fidelity UX Prototype

  This is a code bundle for Low-Fidelity UX Prototype. The original project is available at https://www.figma.com/design/fD2wCiElXkIWzEdII7PqT6/Low-Fidelity-UX-Prototype.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Large media

  Some binaries are too large to keep in git. They are served from `public/media/`,
  which Vite copies verbatim into `dist/` without passing it through the bundler — so a
  missing file there is a missing file at runtime, never a build failure. The build
  succeeds on a fresh clone whether or not you have them.

  | File | Used by | Missing behaviour |
  | --- | --- | --- |
  | `public/media/galerie-hengelo-master.mp4` | `src/app/components/Homepage.tsx` | The `<video>` shows its poster and plays nothing |

  To restore the video locally, drop it in with that exact filename. It stays gitignored.
  A production deploy needs it supplied through the same path — from an asset store, an
  upload to the host, or a deploy step.

  Do not import these files from `src/`. An import has to resolve at build time, so a
  gitignored binary breaks `npm run build` for everyone who does not have it.
