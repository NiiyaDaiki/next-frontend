// app/organisms/TopFeaturedProducts.tsx
"use client";
import React from "react";
import TopFeaturedProductTile from "@/app/molecules/TopFeaturedProductTile";

export type TopFeaturedItem = {
  name: string;
  price: number;
  image: string;
};

type TopFeaturedProps = {
  bigItem: TopFeaturedItem; // 左側に表示する大きな商品
  topRightItems: TopFeaturedItem[]; // 右側に縦並びの2商品
};

export default function TopFeaturedProducts({
  bigItem,
  topRightItems,
}: TopFeaturedProps) {
  const [rightItem1, rightItem2] = topRightItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      {/* 左（大きい商品） */}

      <TopFeaturedProductTile item={bigItem} size={"full"} />

      {/* 右（2商品を縦に並べる） */}

      <TopFeaturedProductTile item={rightItem1} size={"half"} />
      <TopFeaturedProductTile item={rightItem2} size={"half"} />
    </section>
  );
}
