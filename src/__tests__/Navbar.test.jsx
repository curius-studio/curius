import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("Navbar", () => {
  it("renderiza los links pasados por props", () => {
    const links = [
      { label: "Inicio", to: "/" },
      { label: "Contenido", to: "/contenido" },
    ];

    renderWithRouter(<Navbar links={links} />);

    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("cada link tiene el texto correcto", () => {
    const links = [{ label: "Contacto", to: "/contacto" }];

    renderWithRouter(<Navbar links={links} />);

    const link = screen.getByRole("link", { name: "Contacto" });
    expect(link).toHaveAttribute("href", "/contacto");
  });
});
