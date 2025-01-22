// app/organisms/ProductCarousel.tsx
"use client";
import React from "react";
import ProductCard from "../molecules/ProductCard";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type ProductCarouselProps = {
  products: Product[];
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <section className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="animate-carousel flex gap-4">
        {products.map((item) => (
          <li
            key={item.id}
            // 横スクロールでカードが並ぶため、幅をある程度固定
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <ProductCard
              label={item}
              src={item.imageUrl}
              alt={item.name}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
