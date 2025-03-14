import { Toaster } from "@/components/ui/sonner";
import { render, screen } from "@testing-library/react";
import { useTheme } from "next-themes";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

jest.mock("sonner", () => ({
  Toaster: ({ theme, className, toastOptions }: { theme: string; className: string; toastOptions: object }) => (
    <div data-testid="sonner-toaster" data-theme={theme} className={className}>
      {JSON.stringify(toastOptions)}
    </div>
  ),
}));

describe("Toaster component", () => {
  it("renders with the correct theme from useTheme hook", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "dark" });

    render(<Toaster />);

    const toasterElement = screen.getByTestId("sonner-toaster");

    expect(toasterElement).toHaveAttribute("data-theme", "dark");
  });

  it("renders with default theme when theme is undefined", () => {
    (useTheme as jest.Mock).mockReturnValue({});

    render(<Toaster />);

    const toasterElement = screen.getByTestId("sonner-toaster");

    expect(toasterElement).toHaveAttribute("data-theme", "system");
  });

  it("applies the correct className and toast options", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });

    render(<Toaster />);

    const toasterElement = screen.getByTestId("sonner-toaster");

    expect(toasterElement).toHaveClass("toaster", "group");
    expect(toasterElement).toHaveTextContent("group-[.toaster]:bg-background");
  });
});