import { render, screen } from "@testing-library/react";
import type { ImageProps } from "next/image";
import { Avatar } from "./avatart";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }: ImageProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src as string} alt={alt} {...rest} />;
  },
}));

describe("Avatar component", () => {
  it("renders th default icon when no src is provided", () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector("img")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders an image when scr is provided", () => {
    render(<Avatar src="/developer.jpg" alt="user avatar" />);
    const img = screen.getByAltText("user avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/developer.jpg");
  });

  it("applies the correct css class for different varaints", () => {
    const { rerender, container } = render(<Avatar variant="primary" />);
    expect(container.firstChild).toHaveClass("avatar-primary");

    rerender(<Avatar variant="secondary" />);
    expect(container.firstChild).toHaveClass("avatar-secondary");
  });

  it("applies the correct width and height for different sizes", () => {
    const { container, rerender } = render(<Avatar size="tiny" />);
    expect(container.firstChild).toHaveStyle({ width: "40px", height: "40px" });

    rerender(<Avatar size="small" />);
    expect(container.firstChild).toHaveStyle({ width: "50px", height: "50px" });

    rerender(<Avatar size="normal" />);
    expect(container.firstChild).toHaveStyle({ width: "70px", height: "70px" });

    rerender(<Avatar size="large" />);
    expect(container.firstChild).toHaveStyle({
      width: "120px",
      height: "120px",
    });
  });
});
