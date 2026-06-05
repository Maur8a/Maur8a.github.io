# Vochoa - Sitio Web Oficial (One-Page Experience)

Este repositorio contiene la arquitectura completa de diseño y desarrollo frontend para la plataforma web oficial del artista musical **Vochoa**. El sitio ha sido concebido bajo un enfoque de alto impacto visual y rendimiento optimizado, traduciendo fielmente la esencia sonora del Rock Psicodélico, Indie, Power Ballads y texturas LoFi en una experiencia digital inmersiva de una sola página (One-Page) con navegación fluida.

## 1. Dirección de Arte y Concepto UX/UI

El ecosistema visual del sitio se rige bajo el concepto de **"Choque Térmico Visual"**, una dualidad estética de alto contraste inspirada directamente en el catálogo y arte gráfico del artista:

* **La Energía del Fuego:** Tonos amarillos y naranjas intensos que evocan la identidad rebelde y humana de la portada del álbum (el automóvil clásico en llamas).
* **El Misticismo de la Noche:** Fondos oscuros, negros espaciales, azules eléctricos y púrpuras profundos basados en la atmósfera de sencillos como *El Lago De La Paz*, *A Ralenti* y *Lluvia*.
* **Componentes de Interfaz:** Implementación de contenedores modernos con efecto esmerilado (*glassmorphism*) combinados con tipografías display de gran peso visual (*Syne*) para los encabezados, garantizando una narrativa tipográfica legible y potente (*Montserrat*).

## 2. Estructura del Contenido (Flujo UX)

La navegación se ejecuta de forma secuencial y orgánica a través de cinco bloques clave:

1.  **Sección Hero:** Impacto inicial inmediato mediante un degradado que fusiona la noche espacial con destellos inferiores de fuego, preparando el espacio para la imagen principal del artista y un llamado a la acción imperativo.
2.  **Sección Biografía:** Maquetación asimétrica de estilo editorial que explora el lado humano y relata la sinergia de géneros musicales, acompañada de tarjetas de lectura interactivas para las historias de las canciones.
3.  **Sección Lanzamientos:** Aloja un reproductor de audio premium personalizado con controles estilizados y enlaces directos a plataformas de streaming (Spotify, YouTube, Apple Music).
4.  **Sección Galería:** Grid responsivo que expone el arte visual de los sencillos, potenciado por un visualizador expandible nativo.
5.  **Sección Contacto:** Formulario minimalista y elegante para la gestión de contrataciones, prensa y comunicación directa con la audiencia.

## 3. Entorno Tecnológico y Arquitectura

Para asegurar un rendimiento óptimo, máxima accesibilidad y tiempos de carga instantáneos, el desarrollo prescinde por completo de librerías o frameworks de terceros:

* **HTML5 Semántico:** Uso estricto de etiquetas estructurales (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) que benefician el posicionamiento SEO y la accesibilidad (elementos ARIA implementados).
* **CSS3 Moderno:** Arquitectura basada en variables globales para la gestión centralizada de la paleta de colores y transiciones. Uso de CSS Grid y Flexbox para la distribución del espacio, aplicando una metodología *Mobile-First* adaptativa.
* **JavaScript Vanilla (Puro):** Script unificado encargado del control de estados de la interfaz sin sobrecargar el hilo de ejecución del navegador.

## 4. Características Técnicas del Código

### interactividad Nativa en `script.js`
* **Navegación Móvil:** Sistema de menú hamburguesa con transiciones fluidas de CSS y control de cierre automático al seleccionar una sección.
* **Simulación del Reproductor:** Algoritmo en bucle que calcula el tiempo transcurrido en segundos, formatea los minutos de manera dinámica y actualiza la barra de progreso de forma proporcional.
* **Lightbox Nativo:** Módulo de visualización que clona el nodo del DOM seleccionado y lo proyecta sobre un contenedor modal síncrono. Incluye accesibilidad por teclado para el cierre de la interfaz mediante la tecla *Escape*.
* **Validación de Formulario:** Validación interceptora del evento *submit* que comprueba la presencia de caracteres y aplica expresiones regulares (Regex) para la autenticación de la estructura del correo electrónico, activando estados visuales de error específicos por contenedor.

## 5. Instrucciones de Implementación y Despliegue

La solución se encuentra modularizada en tres archivos independientes listos para su distribución: