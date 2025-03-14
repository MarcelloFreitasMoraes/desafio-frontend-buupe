import { Checkbox } from "@/components/ui/checkbox";
import { render, screen, fireEvent } from "@testing-library/react";


describe("Checkbox Component", () => {
  it("deve renderizar o componente Checkbox", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("deve permitir marcar e desmarcar o checkbox", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("deve aplicar a classe customizada corretamente", () => {
    const customClass = "custom-class";
    render(<Checkbox className={customClass} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass(customClass);
  });

  it("deve estar desabilitado quando a prop 'disabled' for passada", () => {
    render(<Checkbox disabled />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });
});
