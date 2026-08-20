# Especificación de implementación — El Archivo Celestial

## 1. Concepto
Portafolio que se recorre como una biblioteca personal de conocimiento.
Tecnología = estructura.
Libros = narrativa.
Constelaciones = curiosidad e imaginación.
Geometría triangular = detalle personal oculto.
No usar estética steampunk ni fantasía excesiva.

## 2. Pantallas
### Home / Prólogo
Basada en Figma existente:
- monograma SRP;
- encabezado;
- selector ES/EN;
- hero “El Archivo Celestial”;
- CTA;
- estantería;
- libros.

### Sobre mí
Basada en Figma existente.
La foto real se muestra con tratamiento editorial cálido, no con edición facial.

### Experiencia
Basada en Figma existente.
No inventar fechas ni métricas.

### Proyectos
Basada en Figma existente.
Proyectos futuros mantienen etiqueta “por desarrollar / planned”.

### Habilidades
Diseño final no completado en Figma:
- página izquierda = códice organizado;
- página derecha = mapa de constelaciones;
- niveles verificables:
  - experiencia profesional;
  - práctica/formación;
  - conocimiento complementario.
- evitar porcentajes.

### Formación
Libro independiente:
- cronología académica;
- Cum Laude visible pero elegante;
- especialización en ciberseguridad;
- Power BI I / II;
- técnico medio;
- certificaciones.

### Contacto
Carta abierta.
Sin formulario.
Acciones:
- mailto;
- LinkedIn;
- GitHub;
- descargar CV general.

## 3. Interacciones
### Desktop
Hover libro:
- translateY: -18px;
- brillo suave;
- sombra más profunda.

Open:
1. oscurecer biblioteca;
2. clonar libro seleccionado;
3. mover al centro;
4. escalar;
5. leve rotateY;
6. constelaciones/circuitos;
7. mostrar libro abierto;
8. ocultar clon.

Close:
1. fade modal;
2. restaurar biblioteca.

### Mobile
- librería horizontal;
- libro central;
- scroll-snap;
- apertura simplificada;
- libro abierto se convierte en páginas verticales;
- evitar page-turn 3D costoso.

## 4. Easter egg
Tres estrellas formando triángulo/pirámide en fondo.
Debe ser sutil.
No incluir explicación.
Referencias mitológicas/astronómicas solo como naming interno o detalles visuales discretos.

## 5. Accesibilidad
- Escape cierra modal;
- botones reales, no divs clicables;
- aria-labels;
- foco visible;
- contraste adecuado;
- `prefers-reduced-motion`;
- no autoplay ni sonido.

## 6. Performance
- no librerías adicionales;
- assets locales;
- foto optimizada WebP/JPEG en fase polish;
- evitar filtros pesados en móvil;
- GSAP solo para transiciones principales.

## 7. Datos
Toda información editable en:
- `src/content/profile.ts`
- `src/content/es.ts`
- `src/content/en.ts`

## 8. Diseño / tokens
Ver `src/styles/tokens.css`.
No introducir una nueva paleta sin autorización.

## 9. CV
Ruta esperada:
`public/cv/Sara_Retana_Perez_CV_General.pdf`

Si aún no existe, el enlace puede permanecer temporalmente hasta agregar el archivo final.

## 10. Foto
`public/assets/sara-retana.jpg`
No reemplazar con una imagen generada.
