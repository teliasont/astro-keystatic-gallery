# Astro + Keystatic Photo Gallery

An Astro 7 site with [Keystatic](https://keystatic.com) as a Git-based CMS for photo galleries.

## Commands

| Command           | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Dev server at `http://127.0.0.1:4321`          |
| `npm run build`   | Build to `./dist/` (Node standalone server)    |
| `npm run preview` | Preview the build                              |

## Editing content

Open `http://127.0.0.1:4321/keystatic` while the dev server runs.

- **Galleries** are stored as Markdoc files in `src/content/galleries/`.
- **Images** go in `src/assets/galleries/`, so `astro:assets` optimizes them at build time.
- The schema is in `keystatic.config.ts`, and the matching Astro content collection is in `src/content.config.ts`. Change both together.

Storage is `local`, so edits are written to disk and you commit them yourself. To deploy to Cloudflare and edit on the live site with Keystatic Cloud, see [docs/keystatic-cloud.md](docs/keystatic-cloud.md).
