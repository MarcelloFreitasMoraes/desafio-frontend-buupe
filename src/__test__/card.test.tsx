import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { render, screen } from "@testing-library/react";

jest.mock('@/lib/utils', () => ({
    cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
  }))
  
describe("Card Component", () => {
  it("deve renderizar o Card com a classe padrão", () => {
    render(<Card>Conteúdo do Card</Card>);
    const card = screen.getByText("Conteúdo do Card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute("data-slot", "card");
  });

  it("deve renderizar o CardHeader", () => {
    render(<CardHeader>Header do Card</CardHeader>);
    const header = screen.getByText("Header do Card");
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute("data-slot", "card-header");
  });

  it("deve renderizar o CardTitle", () => {
    render(<CardTitle>Título do Card</CardTitle>);
    const title = screen.getByText("Título do Card");
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("data-slot", "card-title");
  });

  it("deve renderizar o CardDescription", () => {
    render(<CardDescription>Descrição do Card</CardDescription>);
    const description = screen.getByText("Descrição do Card");
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute("data-slot", "card-description");
  });

  it("deve renderizar o CardContent", () => {
    render(<CardContent>Conteúdo do Card</CardContent>);
    const content = screen.getByText("Conteúdo do Card");
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute("data-slot", "card-content");
  });

  it("deve renderizar o CardFooter", () => {
    render(<CardFooter>Footer do Card</CardFooter>);
    const footer = screen.getByText("Footer do Card");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute("data-slot", "card-footer");
  });
});