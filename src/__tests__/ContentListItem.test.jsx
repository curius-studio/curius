import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContentListItem from "../components/ContentListItem/ContentListItem";

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("ContentListItem", () => {
  it("renderiza título y excerpt", () => {
    renderWithRouter(
      <ContentListItem
        title="Título de prueba"
        excerpt="Resumen de prueba"
        slug="test-slug"
      />
    );

    expect(screen.getByText("Título de prueba")).toBeInTheDocument();
    expect(screen.getByText("Resumen de prueba")).toBeInTheDocument();
  });

  it("renderiza enlace correcto al contenido", () => {
    renderWithRouter(
      <ContentListItem
        title="Post"
        excerpt="Texto"
        slug="mi-post"
      />
    );

    const link = screen.getByRole("link", { name: /leer contenido/i });
    expect(link).toHaveAttribute("href", "/contenido/mi-post");
  });

  it("usa imagen por defecto si no hay thumbnail", () => {
    renderWithRouter(
      <ContentListItem
        title="Post sin imagen"
        excerpt="Texto"
        slug="sin-imagen"
      />
    );

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("no crashea si date no se pasa", () => {
    renderWithRouter(
      <ContentListItem
        title="Post sin fecha"
        excerpt="Texto"
        slug="sin-fecha"
      />
    );

    expect(screen.getByText("Post sin fecha")).toBeInTheDocument();
  });
});
