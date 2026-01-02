import { useEffect, useState } from "react";
import { posts } from "../content/blog";
import { setTitle, setDescription } from "../utils/seo";
import ContentListItem from "../components/ContentListItem/ContentListItem";

const POSTS_PER_PAGE = 2;

function BlogList() {
  useEffect(() => {
    setTitle("Contenido | Curius");
    setDescription("Listado de contenidos y publicaciones del sitio.");
  }, []);

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <section>
      <h1>Contenido</h1>

      <ul>
        {currentPosts.map((post) => (
          <ContentListItem
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            thumbnail={post.thumbnail}
            date={post.date}
          />
        ))}
      </ul>

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <span>
          {" "}
          Página {page} de {totalPages}{" "}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}

export default BlogList;
