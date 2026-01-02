/**
 * Loader del contenido del blog.
 *
 * Se encarga de:
 * - Leer los archivos Markdown
 * - Extraer metadata mínima
 * - Generar slugs a partir del título
 *
 * No contiene lógica de UI.
 */

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function loadPosts() {
  const files = import.meta.glob("./*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  return Object.entries(files).map(([, raw]) => {
    const [, meta, content] = raw.split("---");

    const metadata = Object.fromEntries(
      meta
        .trim()
        .split("\n")
        .map((line) => line.split(": ").map((s) => s.trim()))
    );

    return {
      slug: slugify(metadata.title),
      title: metadata.title,
      excerpt: metadata.excerpt,
      date: new Date(metadata.date),
      content: content.trim(),
    };
  });
}
