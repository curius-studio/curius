/**
 * Página de post individual del blog.
 *
 * Obtiene el slug desde la URL
 * y renderiza el post correspondiente.
 */

import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../content/blog";

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post no encontrado</p>;
  }

  return (
    <article>
      <Link to="/contenido">← Volver al blog</Link>

      <h1>{post.title}</h1>
      <small>{post.date.toDateString()}</small>

      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default BlogPost;
