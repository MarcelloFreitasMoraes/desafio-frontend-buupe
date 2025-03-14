import { Label } from "@/components/ui/label";
import { render, screen } from "@testing-library/react";

describe("Label component", () => {
  it("renders the label with default text", () => {
    render(<Label>My Label</Label>);
    expect(screen.getByText("My Label")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Label className="custom-class">Custom Class Label</Label>);
    const labelElement = screen.getByText("Custom Class Label");
    expect(labelElement).toHaveClass("custom-class");
  });

  it("renders additional props", () => {
    render(<Label htmlFor="input-id">Label with htmlFor</Label>);
    const labelElement = screen.getByText("Label with htmlFor");
    expect(labelElement).toHaveAttribute("for", "input-id");
  });
});
