import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders the Button with text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByText("Delete")).toHaveClass("bg-red-600");
  });

  it("applies the correct size class", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByText("Large")).toHaveClass("px-6 py-3");
  });

  it("disables the button when disabled prop is true", async () => {
    const user = userEvent.setup();
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText("Disabled") as HTMLButtonElement;

    expect(button).toBeDisabled();
    await user.click(button);
    // Button click should not throw or change state
  });
});
