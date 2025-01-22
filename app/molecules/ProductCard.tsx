// app/molecules/ProductCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import Label from "@/app/atoms/Label";

type ProductCardProps = {
  label: {
    name: string;
    price: number;
    currency?: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>;

export default function ProductCard({ label, ...props }: ProductCardProps) {
  return (
    <div className="aspect-square bg-black rounded-md flex flex-col w-full h-full relative cursor-pointer hover:border hover:border-blue-600">
      {/* 画像エリア */}
      <Image
        src={props.src}
        alt={props.alt}
        style={{ objectFit: "contain" }}
        fill
        priority
        sizes={props.sizes}
        className="transition duration-300 ease-in-out hover:scale-105"
      />
      {/* 商品名＋価格 */}
      <div className="p-2 flex justify-center">
        <Label
          name={label.name}
          price={label.price}
          currency={label.currency}
          position={label.position}
        />
      </div>
    </div>
  );
}
