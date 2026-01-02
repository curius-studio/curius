import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostCard from "../components/PostCard/PostCard";

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("PostCard", () => {
  it("renderiza el título", () => {
    renderWithRouter(
      <PostCard
        title="Post destacado"
        excerpt="Resumen"
        slug="destacado"
        date={new Date()}
      />
    );

    expect(screen.getByText("Post destacado")).toBeInTheDocument();
  });

  it("renderiza enlace correcto", () => {
    renderWithRouter(
      <PostCard
        title="Post"
        excerpt="Texto"
        slug="post-slug"
        date={new Date()}
      />
    );

    const link = screen.getByRole("link", { name: /leer más/i });
    expect(link).toHaveAttribute("href", "/contenido/post-slug");
  });

  it("usa fallback de imagen si no hay thumbnail", () => {
    renderWithRouter(
      <PostCard
        title="Post sin imagen"
        excerpt="Texto"
        slug="sin-imagen"
        date={new Date()}
      />
    );

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
