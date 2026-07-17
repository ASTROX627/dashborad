import { render } from "@testing-library/react";
import * as Icons from "./index";
import { SvgIcon } from "./icon.types";

const iconEntries = Object.entries(Icons) as [string, React.FC<SvgIcon>][];

describe("Icon components", () => {
  it.each(iconEntries)("renders %s without crashing", (_name, Icon) => {
    const { container } = render(<Icon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it.each(iconEntries)(
    "applies custom width, height and color to %s",
    (_name, Icon) => {
      const { container } = render(
        <Icon width={32} height={32} color="#ff0000" />,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", "32");
      expect(svg).toHaveAttribute("height", "32");
      expect(svg).toHaveAttribute("stroke", "#ff0000");
    },
  );

  it.each(iconEntries)("uses default props for %s", (_name, Icon) => {
    const { container } = render(<Icon />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });
});
