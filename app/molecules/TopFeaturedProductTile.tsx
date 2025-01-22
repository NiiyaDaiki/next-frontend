// app/organisms/TopFeaturedProductTile.tsx
"use client";
import React from "react";
import ProductCard from "../molecules/ProductCard";
import { Item } from "@/app/organisms/TopFeaturedProducts";

type TopFeaturedProductTileProps = {
  item: Item;
  size: "full" | "half";
};

export default function TopFeaturedProductTile({
  item,
  size,
}: TopFeaturedProductTileProps) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <ProductCard
        sizes={
          size === "full"
            ? "(min-width: 768px) 66vw, 100vw"
            : "(min-width: 768px) 33vw, 100vw"
        }
        label={{
          name: item.name,
          price: item.price,
          position: size === "full" ? "center" : "bottom",
        }}
        src={item.image}
        alt={item.name}
        fill
      />
    </div>
  );
}
