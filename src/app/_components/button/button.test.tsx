import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders a deafult button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });

  it("disables the button when isDisabled prop is ture", () => {
    render(<Button isDisabled>click here</Button>);
    expect(screen.getByText("click here")).toBeDisabled();
  });

  it("applies the correct css class when isOutline prop is true", () => {
    render(<Button isOutline>click here</Button>);
    expect(screen.getByText("click here")).toHaveClass("btn-outline");
  });

  it("applies the correct css class when isLink prop is true", () => {
    render(<Button isLink>click here</Button>);
    expect(screen.getByText("click here")).toHaveClass("btn-link");
  });

  it("applies the correct css class for different button shapes", () => {
    const { rerender } = render(<Button shape="wide">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-wide");

    rerender(<Button shape="full">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-block");

    rerender(<Button shape="square">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-square");
  });

  it("applies the correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");

    rerender(<Button variant="neutral">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-neutral");

    rerender(<Button variant="secondary">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-secondary");

    rerender(<Button variant="accent">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-accent");

    rerender(<Button variant="ghost">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-ghost");

    rerender(<Button variant="success">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-success");

    rerender(<Button variant="warning">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-warning");

    rerender(<Button variant="error">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-error");
  });

  it("applies the correct css class for different button sizes", () => {
    const { rerender } = render(<Button size="small">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-sm");

    rerender(<Button size="large">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");

    rerender(<Button size="tiny">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-xs");
  });

  it("applies the correct css class when isLoading prop is true", () => {
    render(<Button isLoading loadingText="sending">click here</Button>);
    expect(screen.getByText("sending")).toBeInTheDocument();
  });
});
