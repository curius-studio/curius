/**
 * SEO básico usando APIs nativas del DOM.
* Limita automáticamente la meta description
 * a una longitud segura (~160 caracteres).
 */

const MAX_DESCRIPTION_LENGTH = 160;

export function setTitle(title) {
  document.title = title;
}

export function setDescription(description) {
  let meta = document.querySelector("meta[name='description']");

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }

  const safeDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH - 1).trim() + "…"
      : description;

  meta.setAttribute("content", safeDescription);
}
