import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";


const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BadgeWithBrandColors: Story = {
  render: () => (
    <>
      <Badge>Defualt</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </>
  )
}

export const BadgeWithStateColors: Story = {
  render: () => (
    <>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </>
  )
}

export const BadgeSize: Story = {
  render: () => (
    <>
      <Badge variant="neutral" size="tiny">Tiny</Badge>
      <Badge variant="neutral" size="small">Small</Badge>
      <Badge variant="neutral" size="normal">Normal</Badge>
      <Badge variant="neutral" size="large">Large</Badge>
    </>
  )
}

