import { Input } from "@/components/ui/input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Input Component", () => {
  it("deve renderizar o input com placeholder", () => {
    render(<Input placeholder="Digite algo..." />);

    const inputElement = screen.getByPlaceholderText("Digite algo...");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("data-slot", "input");
  });

  it("deve chamar a função onChange ao digitar", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "Texto digitado");

    expect(handleChange).toHaveBeenCalledTimes("Texto digitado".length);
  });

  it("deve renderizar um ícone no final do input", () => {
    const endIcon = <span>Ícone</span>;

    render(<Input endIcon={endIcon} />);

    const iconElement = screen.getByText("Ícone");
    expect(iconElement).toBeInTheDocument();
  });

  it("deve exibir mensagem de erro quando passada", () => {
    const errorMessage = "Erro ao digitar";

    render(<Input error={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass("text-red-400");
  });

  it("deve desabilitar o input quando a prop disabled for passada", () => {
    render(<Input disabled />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });
});