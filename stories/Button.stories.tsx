import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/app/atoms/Button";

// Storybookのメタ情報を定義
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

// StoryObj で型定義
type Story = StoryObj<typeof Button>;

/**
 * 「応募する」の文言が表示された青色のmediumなボタン
 */
export const BlueMedium: Story = {
  args: {
    children: "応募する",
    color: "blue",
    size: "medium",
    disabled: false,
  },
};

/**
 * 「削除する」の文言が表示された赤色のsmallなボタン
 */
export const RedSmall: Story = {
  args: {
    children: "削除する",
    color: "red",
    size: "small",
    disabled: false,
  },
};

/**
 * 「削除する」ボタンが押下不可になったバージョン (disabled = true)
 */
export const RedSmallDisabled: Story = {
  args: {
    children: "削除する",
    color: "red",
    size: "small",
    disabled: true,
  },
};
