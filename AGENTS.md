# AGENTS.md

## Project: David Portfolio

Personal portfolio site built with Astro 6, React 19, Tailwind CSS 4, deployed to Cloudflare.

## Tech Stack

- **Runtime**: Node >=22.12.0
- **Framework**: Astro 6.3.x (SSR mode via Cloudflare adapter)
- **UI Components**: React 19 (JSX runtime: react-jsx, no manual React imports needed)
- **Styling**: Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Deployment**: Cloudflare Workers/Pages (@astrojs/cloudflare adapter)
- **Language**: TypeScript (strict mode, extends astro/tsconfigs/strict)

## Architecture

- Pages are in `src/pages/` using file-based routing (.astro files)
- Interactive components use React (.tsx/.jsx), static components use Astro (.astro)
- Global styles imported via `src/styles/global.css` (uses `@import "tailwindcss"`)
- Static assets live in `public/`
- Cloudflare Workers config in `wrangler.jsonc`

## Commands

- `npm run dev` - Start dev server on localhost:4321
- `npm run build` - Production build to ./dist/
- `npm run preview` - Preview production build locally
- `npm run generate-types` - Generate Cloudflare Worker types via wrangler

## Linting & Type Checking

- No linter is configured yet. Check package.json scripts before assuming eslint/prettier exists.
- TypeScript checking: `npx astro check`

## Conventions

- Portfolio site in Spanish (es) or bilingual (es/en) - content should reflect this
- Component files: PascalCase for React (.tsx), kebab-case for Astro (.astro)
- CSS: Tailwind utility classes preferred, custom CSS only in src/styles/
- No comments in code unless explicitly requested
- Imports: Astro components use `.astro` extension in imports; React components use `.tsx`

## Cloudflare Notes

- The project uses `@astrojs/cloudflare` adapter for SSR
- Wrangler types can be generated with `npm run generate-types`
- Environment variables and bindings are configured in `wrangler.jsonc`
- The `.wrangler/` directory is git-ignored (local dev state)

## Important Patterns

- Tailwind CSS 4 uses `@import "tailwindcss"` (not the old `@tailwind` directives)
- The `global.css` file must be imported in pages/layouts for Tailwind to work
- React components need the `client:*` directive when used in Astro pages (e.g., `client:load`, `client:visible`)
- Vite version is overridden to ^7 in package.json