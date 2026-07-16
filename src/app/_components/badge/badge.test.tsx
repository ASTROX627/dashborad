import { render, screen } from "@testing-library/react"
import { Badge } from "./badge"

describe("Badge Component", () => {
  it("renders a default badge", () => {
    const {getByText} = render(<Badge>Badge</Badge>);
    expect(getByText("Badge")).toBeInTheDocument();
  });

  it("applies the correct css class for different variants", () => {
    const {rerender}= render(<Badge variant="primary">Badge</Badge>);
    expect(screen.getByText("Badge")).toHaveClass("badge-primary");

    rerender(<Badge variant="secondary">Badge</Badge>);
    expect(screen.getByText("Badge")).toHaveClass("badge-secondary");
  });

  it("applies the correct css class for different sizes", () => {
    const {rerender} = render(<Badge size="tiny">Badge</Badge>);
    expect(screen.getByText("Badge")).toHaveClass("badge-xs");

    rerender(<Badge size="small">Badge</Badge>);
    expect(screen.getByText("Badge")).toHaveClass("badge-sm");

    rerender(<Badge size="large">Badge</Badge>);
    expect(screen.getByText("Badge")).toHaveClass("badge-lg");
  })
})
