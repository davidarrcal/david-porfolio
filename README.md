# David Portfolio

Mi portfolio personal, construido con Astro, React y Tailwind CSS, desplegado en Cloudflare.

## Stack

- **Astro 6** - Framework meta para contenido enfocado en la web
- **React 19** - Libreria de UI para componentes interactivos
- **Tailwind CSS 4** - Framework CSS utility-first
- **Cloudflare Pages/Workers** - Hosting y edge computing
- **TypeScript** - Tipado estatico

## Estructura del proyecto

```text
/
├── public/             # Archivos estaticos (favicon, imagenes, etc.)
├── src/
│   ├── components/     # Componentes reutilizables (Astro/React)
│   ├── layouts/        # Layouts de pagina
│   ├── pages/          # Rutas del sitio (file-based routing)
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuracion de Astro
├── tsconfig.json       # Configuracion de TypeScript
├── wrangler.jsonc      # Configuracion de Cloudflare Workers
└── package.json
```

## Comandos

| Comando                  | Accion                                          |
| :----------------------- | :---------------------------------------------- |
| `npm install`            | Instalar dependencias                           |
| `npm run dev`            | Servidor de desarrollo en `localhost:4321`       |
| `npm run build`          | Construir sitio de produccion en `./dist/`      |
| `npm run preview`        | Previsualizar la build localmente               |
| `npm run generate-types` | Generar tipos de Cloudflare Workers             |

## Desarrollo

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Ejecutar `npm run dev`
4. Abrir `http://localhost:4321`

## Despliegue

El proyecto esta configurado para desplegarse en Cloudflare usando el adapter `@astrojs/cloudflare`. La configuracion se encuentra en `wrangler.jsonc`.

## Convenciones

- Las paginas van en `src/pages/` con extension `.astro`
- Los componentes interactivos usan React (`.tsx`)
- Los componentes estaticos usan Astro (`.astro`)
- Los estilos globales se importan desde `src/styles/global.css`
- Los recursos estaticos van en `public/`