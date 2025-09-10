import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  it("renders with title", () => {
    render(<Button title="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders children if provided", () => {
    render(<Button>Child Text</Button>);
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("does not render if no children, no title, and not loading", () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toBeNull();
  });

  it("applies variant styles", () => {
    render(<Button title="Primary" variant="primary" />);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-blue-600");
  });

  it("applies size styles", () => {
    render(<Button title="Small" size="sm" />);
    const button = screen.getByText("Small");
    expect(button).toHaveClass("text-sm");
  });

  it("applies shape styles", () => {
    render(<Button title="Rounded" shape="pill" />);
    const button = screen.getByText("Rounded");
    expect(button).toHaveClass("rounded-full");
  });

  it("disables button when loading", () => {
    render(<Button loading loadingText="Loading..." />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders loader without text", () => {
    render(<Button loading />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("renders with custom loader color", () => {
    render(<Button loading loaderColor="red" />);
    const loader = screen.getByRole("button").querySelector("path");
    expect(loader).toHaveAttribute("fill", "red");
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<Button title="Click" onClick={onClick} />);
    fireEvent.click(screen.getByText("Click"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = jest.fn();
    render(<Button title="Disabled" disabled onClick={onClick} />);
    fireEvent.click(screen.getByText("Disabled"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("adds ripple effect when clicked", () => {
    render(<Button title="Ripple" ripple />);
    const button = screen.getByText("Ripple");
    fireEvent.click(button, { nativeEvent: { offsetX: 10, offsetY: 10 } });

    // ripple span should exist temporarily
    expect(button.querySelector(".ripple")).toBeInTheDocument();
  });

  it("does not show ripple if ripple=false", () => {
    render(<Button title="No Ripple" ripple={false} />);
    const button = screen.getByText("No Ripple");
    fireEvent.click(button, { nativeEvent: { offsetX: 10, offsetY: 10 } });
    expect(button.querySelector(".ripple")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button title="Custom" className="test-class" />);
    const button = screen.getByText("Custom");
    expect(button).toHaveClass("test-class");
  });

  it("applies width styles", () => {
    render(<Button title="Full Width" width="full" />);
    const button = screen.getByText("Full Width");
    expect(button).toHaveClass("w-full");
  });
});
