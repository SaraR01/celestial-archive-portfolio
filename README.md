# Digital Archive · Sara Retana

Portafolio profesional interactivo de Sara Retana, Systems Engineer, presentado como un archivo digital de experiencia, proyectos, habilidades y formación.

## About

Digital Archive es el portafolio profesional de Sara Retana. Utiliza una biblioteca digital y editorial como metáfora para recorrer su experiencia, proyectos, habilidades, formación y formas de contacto.

El proyecto combina una estética editorial y celestial con una implementación tecnológica moderna, accesible y adaptable a distintos tamaños de pantalla.

## Tech Stack

- React
- TypeScript
- Vite
- GSAP
- CSS

## Features

- Biblioteca interactiva de seis libros.
- Apertura animada de libros.
- Experiencia responsive para desktop y mobile.
- Contenido disponible en español e inglés.
- Casos profesionales interactivos dentro del libro Proyectos.
- Próximos volúmenes diferenciados claramente de proyectos completados.
- Constelaciones, estrellas y microinteracciones visuales.
- Compatibilidad con `prefers-reduced-motion`.
- Navegación y controles accesibles.
- Contacto mediante enlaces externos, sin backend.

## Archive Sections

1. 01 Sobre mí / About
2. 02 Experiencia / Experience
3. 03 Proyectos / Projects
4. 04 Habilidades / Skills
5. 05 Formación / Education
6. 06 Contacto / Contact

## Professional Cases

El libro Proyectos contiene casos derivados de experiencia profesional. Cada expediente presenta de forma editorial:

- problema y contexto;
- participación;
- proceso, cuando aplica;
- tecnologías y herramientas;
- resultado.

Los proyectos personales todavía planificados se presentan por separado como próximos volúmenes, sin tratarlos como proyectos completados.

## Design Concept

El concepto visual parte de una biblioteca tecnológica: los libros organizan la narrativa profesional, los archivos estructuran la información y las constelaciones representan conexiones entre conocimientos e ideas.

La paleta de cobre, tierra y carbón equilibra una identidad visual reconocible con una presentación profesional, clara y legible.

## Architecture

- `src/components`: componentes de interfaz y contenido de los libros.
- `src/content`: información profesional y textos centralizados en español e inglés.
- `src/animations`: transiciones principales implementadas con GSAP.
- `src/styles`: tokens, layout, estilos base y movimiento.
- `public`: recursos públicos y archivos estáticos.

La separación entre contenido y componentes permite mantener las versiones ES/EN sin duplicar información dentro de la interfaz.

## Run Locally

```bash
npm install
npm run dev
```

Para verificar la versión de producción:

```bash
npm run build
npm run preview
```

## Development Process

El proyecto se desarrolló de manera incremental utilizando Git y versiones estables. Codex se utilizó como apoyo para implementación, comprobación y revisión; el diseño, el contenido, las decisiones, la validación y la dirección del portafolio forman parte del proceso de desarrollo de Sara Retana.

- v0.1 — Starter/base.
- v0.2 — Build estable.
- v0.3 — Home y responsive.
- v0.4 — Experiencia compartida de apertura de libros.
- v0.5 — Interacciones y evolución del contenido y los proyectos.

## Current Status

El proyecto continúa evolucionando antes de su primera versión pública estable v1.0. El CV permanece intencionalmente en preparación y su descarga está deshabilitada temporalmente.

## License

No license has been selected yet.
