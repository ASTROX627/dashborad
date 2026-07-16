import { render } from "@testing-library/react";
import { Loading } from "./loading";

describe("Loading Component", () => {
  it("renders default loading", () => {
    const { container } = render(<Loading />);
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("applies the correct css class for different types", () => {
    const { rerender, container } = render(<Loading type="spinner" />);
    expect(container.firstChild).toHaveClass("loading-spinner");

    rerender(<Loading type="ring" />);
    expect(container.firstChild).toHaveClass("loading-ring");
  });

  it("applies the correct css class for different variants", () => {
    const { rerender, container } = render(<Loading variant="primary" />);
    expect(container.firstChild).toHaveClass("loading-primary");

    rerender(<Loading variant="secondary" />);
    expect(container.firstChild).toHaveClass("loading-secondary");
  });

  it("applies the correct css class for different sizes", () => {
    const { rerender, container } = render(<Loading size="tiny" />);
    expect(container.firstChild).toHaveClass("loading-xs");

    rerender(<Loading size="small" />);
    expect(container.firstChild).toHaveClass("loading-sm");

    rerender(<Loading size="large" />);
    expect(container.firstChild).toHaveClass("loading-lg");
  });
});
