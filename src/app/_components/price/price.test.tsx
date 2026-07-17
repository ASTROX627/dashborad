import { render, screen } from "@testing-library/react";
import { Price } from "./price";

describe("Price Component", () => {
  it("renders default icon when no price is provided", () => {
    render(<Price />);
    expect(screen.getByText("رایگان")).toBeInTheDocument();
    expect(document.querySelector("svg")).not.toBeInTheDocument();
  });

  it("renders svg when price is provided", () => {
    const { container } = render(<Price price={1000} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container).toHaveTextContent("1,000");
  });

  it("applies the correct css class for different sizes", () => {
    const { container, rerender } = render(<Price size="tiny" price={1000}/>);
    expect(container.firstChild).toHaveClass("text-md");
    let svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "16");
    expect(svg).toHaveAttribute("height", "16");

    rerender(<Price size="small" price={1000}/>);
    expect(container.firstChild).toHaveClass("text-xl");
    svg = container.querySelector("svg")
    expect(svg).toHaveAttribute("width", "18");
    expect(svg).toHaveAttribute("height", "18");

    rerender(<Price size="normal" price={1000}/>);
    expect(container.firstChild).toHaveClass("text-2xl");
    svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "20");
    expect(svg).toHaveAttribute("height", "20");

    rerender(<Price size="large" price={1000}/>);
    expect(container.firstChild).toHaveClass("text-3xl");
    expect(svg).toHaveAttribute("width", "22");
    expect(svg).toHaveAttribute("height", "22");
  });
});
