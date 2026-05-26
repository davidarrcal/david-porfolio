---
name: portfolio-layout
description: Use when creating or editing layout components for the David Portfolio project. Triggers on layout structure, HTML boilerplate, global CSS imports, and shared page wrappers.
---

# Portfolio Layout Skill

## When to use

When creating or modifying layout components in `src/layouts/`.

## Conventions

- Layouts live in `src/layouts/` with `.astro` extension
- Use kebab-case naming (e.g., `base-layout.astro`)
- The base layout must import `../styles/global.css` to activate Tailwind CSS 4
- Pass page-specific props (title, description) through the layout
- Include common `<head>` elements: charset, viewport, favicon, fonts
- Set `lang="es"` on the `<html>` tag

## Base Layout Template

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Portfolio personal de David' } = Astro.props;
---

<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Key Rules

1. Always import `../styles/global.css` in the base layout
2. The `<slot />` renders the page content
3. Layouts can be nested (a page layout wrapping the base layout)
4. Keep layouts minimal - navigation and footer can be separate Astro components included via the layout
5. Use Tailwind utility classes for layout structure (e.g., `min-h-screen`, `flex`, `flex-col`)