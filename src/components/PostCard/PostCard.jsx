/**
 * PostCard (esqueleto técnico)
 *
 * Presenta datos editoriales vía props.
 * No carga datos, no conoce Markdown, no decide contenido.
 */

import { Link } from "react-router-dom";
import defaultThumbnail from "../../assets/default-thumbnail.png";
import "./PostCard.css";

function PostCard({ title, excerpt, date, slug, thumbnail }) {
  const imageSrc = thumbnail || defaultThumbnail;

  return (
    <article className="post-card">
      <img
        src={imageSrc}
        alt={`Miniatura del contenido: ${title}`}
        className="post-card__image"
        onError={(e) => {
          e.currentTarget.src = defaultThumbnail;
        }}
      />

      <header>
        <h3 className="post-card__title">{title}</h3>
        <time
          className="post-card__date"
          dateTime={date.toISOString()}
        >
          {date.toDateString()}
        </time>
      </header>

      <p className="post-card__excerpt">{excerpt}</p>

      <Link
        to={`/contenido/${slug}`}
        className="post-card__link"
      >
        Leer más
      </Link>
    </article>
  );
}

export default PostCard;
