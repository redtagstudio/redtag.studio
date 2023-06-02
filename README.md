# Simple website for [redtag.studio](https://redtag.studio)

> Website was developed in 2018 by blacktag.digital. In 2023 was converted from simple PHP app to static page built using [Astro](astro.build).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/ -> Legacy images, legacy vendor js
├── src/
│   └── assets/ -> Legacy css/js files
│       └── img -> Place new images here and use `Image` component with `getImage` for building `srcset`.
│   └── layouts/
│       └── DefaultLayout.astro -> Layout for a default page.
│       └── CaseLayout.astro -> Layout for a case study. Extend it for case studies.
│   └── pages/
│       └── *.astro
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`          | Installs dependencies                            |
| `yarn run dev`          | Starts local dev server at `localhost:3000`      |
| `yarn run build`        | Build your production site to `./dist/`          |
| `yarn run preview`      | Preview your build locally, before deploying     |
| `yarn run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build).
