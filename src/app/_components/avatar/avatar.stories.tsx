import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./avatart";


const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story/>;
    }
  ]
}

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarWithBrandColors: Story = {
  render: () => (
    <>
      <Avatar />
      <Avatar variant="secondary" />
      <Avatar variant="neutral" />
      <Avatar variant="accent" />
      <Avatar variant="ghost" />
    </>
  )
}

export const AvatarWithStateColors: Story = {
  render: () => (
    <>
      <Avatar variant="success" />
      <Avatar variant="info" />
      <Avatar variant="success" />
      <Avatar variant="error" />
    </>
  ),
};

export const AvatarSizes: Story = {
  render: () => (
    <>
      <Avatar />
      <Avatar size="tiny" />
      <Avatar size="small" />
      <Avatar size="large" />
    </>
  ),
};
