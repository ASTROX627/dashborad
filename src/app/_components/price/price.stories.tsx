import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Price } from "./price";

const meta: Meta<typeof Price> = {
  component: Price,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Price>;

export const PriceSizes: Story = {
  render: () => (
    <>
      <Price size="tiny" price={3000000} />
      <Price size="small" price={3000000} />
      <Price size="normal" price={3000000} />
      <Price size="large" price={3000000} />
    </>
  ),
};
