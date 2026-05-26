---
name: portfolio-page
description: Use when creating or editing pages (.astro) for the David Portfolio project. Triggers on page routing, SEO meta tags, and page-level structure.
---

# Portfolio Page Skill

## When to use

When creating or modifying pages in `src/pages/`.

## Conventions

- Pages live in `src/pages/` with `.astro` extension
- Each file becomes a route based on its path (file-based routing)
- Always import and use the base layout for consistent page structure
- Always import `../styles/global.css` via the layout (not directly in pages)
- Use React components with appropriate `client:*` directives
- Content should be in Spanish (es) or bilingual (es/en)
- Add proper SEO meta tags (title, description, Open Graph)

## Page Template

```astro
---
import BaseLayout from '../layouts/base-layout.astro';
import MySection from '../components/MySection.tsx';
---

<BaseLayout title="Seccion - David Portfolio" description="Descripcion de la seccion">
  <section className="min-h-screen py-20 px-4">
    <h1 className="text-4xl font-bold">Titulo</h1>
    <MySection client:visible />
  </section>
</BaseLayout>
```

## Dynamic Routes

For dynamic routes (e.g., project detail pages):

```astro
---
// src/pages/proyectos/[slug].astro
export async function getStaticPaths() {
  const projects = await fetchProjects();
  return projects.map(project => ({
    params: { slug: project.slug },
    props: { project },
  }));
}
const { project } = Astro.props;
---
```

## SEO Checklist

Every page should include:
- Unique `<title>` via layout props
- Meta description
- Open Graph tags (og:title, og:description, og:image)
- Canonical URL
- Language attribute (`lang="es"` or `lang="en"`)