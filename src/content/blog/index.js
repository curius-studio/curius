/**
 * API de contenido del blog.
 *
 * Expone los posts ya cargados y ordenados,
 * listos para ser consumidos por las páginas.
 */

import { loadPosts } from "./loader";

export const posts = loadPosts().sort(
  (a, b) => b.date - a.date
);
