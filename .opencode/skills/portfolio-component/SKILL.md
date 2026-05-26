---
name: portfolio-component
description: Use when creating or editing React (.tsx) or Astro (.astro) components for the David Portfolio project. Triggers on component creation, UI element design, and interactive widget implementation.
---

# Portfolio Component Skill

## When to use

When creating or modifying UI components for the portfolio site.

## Conventions

### React Components (.tsx)

- Place in `src/components/`
- Use PascalCase naming (e.g., `NavBar.tsx`, `ProjectCard.tsx`)
- Use React 19 automatic JSX runtime (no `import React from 'react'` needed)
- Use TypeScript for all React components
- Use Tailwind CSS utility classes for styling
- Export components as default exports
- Keep components focused on a single responsibility

### Astro Components (.astro)

- Place in `src/components/` for reusable partials, `src/layouts/` for page wrappers
- Use kebab-case naming (e.g., `base-layout.astro`, `nav-bar.astro`)
- Import `../styles/global.css` in layout components to activate Tailwind
- Use Astro components for static content, React for interactive elements

### Tailwind CSS 4

- Use `@import "tailwindcss"` syntax (not `@tailwind` directives)
- Prefer utility classes over custom CSS
- Custom CSS only in `src/styles/` files
- Use Tailwind v4 arbitrary values when needed (e.g., `text-[#1da1f2]`)

### React in Astro

- React components must use `client:*` directive when embedded in Astro pages:
  - `client:load` - for above-the-fold interactive components
  - `client:visible` - for below-the-fold components (lazy load)
  - `client:only="react"` - for components that should never render on server
- Import React components with `.tsx` extension in Astro files

## File Structure Pattern

```
src/
├── components/
│   ├── NavBar.tsx          # Interactive React components
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   └── theme-toggle.astro   # Static Astro components
├── layouts/
│   └── base-layout.astro    # Page layout wrapper
└── pages/
    └── index.astro
```

## React Component Template

```astro
---
import MyComponent from '../components/MyComponent.tsx';
---
<MyComponent client:load />
```

```tsx
interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return <div className="...">{title}</div>;
}
```