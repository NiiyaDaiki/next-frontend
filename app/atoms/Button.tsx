import React, { FC, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  /** ボタン内に表示される要素 */
  children: ReactNode;
  /** ボタンの背景色を red, blue, green の中から指定 */
  color: "red" | "blue" | "green";
  /** ボタンのサイズを small, medium, large の中から指定 */
  size: "small" | "medium" | "large";
  /** ボタンを無効化するかどうか */
  disabled?: boolean;
  /** クリック時に実行される関数 */
  onClick?: () => void;
};

// color に応じたクラス
const colorClasses: Record<ButtonProps["color"], string> = {
  red: "bg-red-500 hover:bg-red-600 disabled:bg-gray-300",
  blue: "bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300",
  green: "bg-green-500 hover:bg-green-600 disabled:bg-gray-300",
};

// size に応じたクラス（pxでの固定幅・高さの例）
const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "w-20 h-8", // 例: 80px x 32px 相当
  medium: "w-32 h-10", // 例: 128px x 40px 相当
  large: "w-40 h-12", // 例: 160px x 48px 相当
};

export const Button: FC<ButtonProps> = ({
  children,
  color,
  size,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // 基本的なボタンのスタイル
        "rounded text-white font-bold focus:outline-none",
        "disabled:cursor-not-allowed",
        // ホバーやフォーカス時の効果を追加したい場合は以下も例として付与
        "focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50",
        // color と size に応じて動的にクラスを付与
        colorClasses[color],
        sizeClasses[size]
      )}
    >
      {children}
    </button>
  );
};
