// app/components/atoms/Label.tsx
import clsx from "clsx";
import React from "react";

type LabelProps = {
  name: string;
  price: number;
  currency?: string;
  position?: "bottom" | "center";
};

export default function Label({
  name,
  price,
  currency = "USD",
  position,
}: LabelProps) {
  return (
    <div
      className={clsx("absolute bottom-0 left-0 flex w-full px-4 pb-4  ", {
        "lg:px-20 lg:pb-[35%]": position === "center",
      })}
    >
      <div className="flex items-center rounded-full backdrop-blur font-semibold text-xs border border-neutral-800 @container/label">
        {/* 商品名 */}
        <span className="mr-4 line-clamp-2 flex-grow pl-2 leading-none">
          {name}
        </span>
        {/* 価格表示 */}
        <span className="rounded-full bg-blue-600 p-2 text-white">
          {`$${price.toFixed(2)}`}
          <span className="ml-1 @[275px]/label:inline">{currency}</span>
        </span>
      </div>
    </div>
  );
}
