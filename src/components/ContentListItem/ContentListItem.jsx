/**
 * ContentListItem (esqueleto técnico)
 *
 * Representa un ítem individual dentro de un listado de contenido.
 * No carga datos ni conoce el sistema de contenido.
 */

import { Link } from "react-router-dom";
import defaultThumbnail from "../../assets/default-thumbnail.png";
import "./ContentListItem.css";

function ContentListItem({ title, excerpt, slug, thumbnail, date }) {
  const imageSrc = thumbnail || defaultThumbnail;

  return (
    <li className="content-list-item">
      <article>
        <img
          src={imageSrc}
          alt={`Miniatura del contenido: ${title}`}
          className="content-list-item__image"
          onError={(e) => {
            e.currentTarget.src = defaultThumbnail;
          }}
        />

        <div className="content-list-item__body">
          <h2 className="content-list-item__title">{title}</h2>

          {date && (
            <time
              className="content-list-item__date"
              dateTime={date.toISOString()}
            >
              {date.toDateString()}
            </time>
          )}

          <p className="content-list-item__excerpt">{excerpt}</p>

          <Link
            to={`/contenido/${slug}`}
            className="content-list-item__link"
          >
            Leer contenido
          </Link>
        </div>
      </article>
    </li>
  );
}

export default ContentListItem;
