---
title: Estructura del proyecto
date: 2024-02-10
excerpt: Descripción de la estructura base del proyecto y la separación de responsabilidades.
---

# Estructura del proyecto

Este post describe la **estructura inicial del proyecto** y el propósito de cada carpeta principal.

El objetivo de esta organización es:

- Mantener el código predecible
- Separar responsabilidades claramente
- Facilitar el crecimiento del proyecto sin refactors costosos

## Carpetas principales

### `core`

Contiene el punto de entrada lógico de la aplicación.  
Aquí se orquesta qué se renderiza y cómo se conectan las partes principales.

No contiene lógica de negocio ni UI final.

### `layout`

Define la estructura visual global de la aplicación, como:

- Header
- Contenedor principal
- Footer

El layout envuelve a las páginas, pero no conoce su contenido.

### `pages`

Incluye las páginas del sitio (Home, Blog, Contacto, etc.).  
Cada página se encarga de **leer datos y renderizar**, no de definir estructuras globales.

### `components`

Componentes reutilizables y desacoplados.  
No dependen de páginas ni de contenido específico.

### `content`

Almacena contenido externo al código, como:

- Posts del blog
- Documentación
- Contenido editorial

El contenido no conoce React ni componentes.

### `utils`

Funciones auxiliares reutilizables.  
No contienen estado ni lógica de UI.

## Conclusión

Esta estructura busca ser **simple, clara y estable**, permitiendo que el proyecto crezca sin perder control ni claridad.
