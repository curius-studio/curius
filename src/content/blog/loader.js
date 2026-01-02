/**
 * Loader del contenido del blog.
 *
 * Lee archivos Markdown, extrae metadata
 * y prepara los datos editoriales del blog.
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
  const files = import.meta.glob("./posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  return Object.entries(files).map(([path, raw]) => {
    const [, meta, content] = raw.split("---");

    const metadata = Object.fromEntries(
      meta
        .trim()
        .split("\n")
        .map((line) => line.split(": ").map((s) => s.trim()))
    );

    const filename = path.split("/").pop().replace(".md", "");
    
    let thumbnail;

    if (metadata.thumbnail) {
      thumbnail = new URL(
        `./images/${metadata.thumbnail}`,
        import.meta.url
      ).href;
    }

    return {
      slug: filename,
      title: metadata.title,
      excerpt: metadata.excerpt,
      date: new Date(metadata.date),
      thumbnail,
      content: content.trim(),
    };
  });
}
