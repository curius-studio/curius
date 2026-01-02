import { useEffect } from "react";
import { setTitle, setDescription } from "../utils/seo";
import { posts } from "../content/blog";
import PostCard from "../components/PostCard/PostCard";

const FEATURED_COUNT = 3;

function Home() {
  useEffect(() => {
    setTitle("Inicio | Curius");
    setDescription("Página principal del sitio Curius.");
  }, []);

  const featuredPosts = posts.slice(0, FEATURED_COUNT);

  return (
    <section>
      <h1>Home</h1>
      <p>Página de inicio.</p>

      <section aria-labelledby="contenido-reciente">
        <h2 id="contenido-reciente">Contenido reciente</h2>

        <div>
          {featuredPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
