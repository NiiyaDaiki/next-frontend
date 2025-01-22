// app/page.tsx
"use client";
import React, { useState } from "react";
import StoreTemplate from "./templates/StoreTemplate";
import ProductCarousel, { Product } from "@/app/organisms/ProductCarousel";
import TopFeaturedProducts, {
  TopFeaturedItem,
} from "@/app/organisms/TopFeaturedProducts";
import { FooterMenuItem } from "@/app/atoms/FooterMenuItem";

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  // 上部大きなTシャツ
  const bigItem = {
    name: "Acme Circles T-Shirt",
    price: 20,
    image: "/images/products/t-shirt-1.avif",
  } satisfies TopFeaturedItem;

  // 上部右側2商品
  const topRightItems = [
    {
      name: "Acme Drawstring Bag",
      price: 12,
      image: "/images/products/bag-1-dark.avif",
    },
    {
      name: "Acme Cup",
      price: 15,
      image: "/images/products/cup-black.avif",
    },
  ] satisfies TopFeaturedItem[];

  // 下部カルーセル
  const carouselItems = [
    {
      id: "1",
      name: "Acme Hoodie",
      price: 50,
      imageUrl: "/images/products/hoodie-1.avif",
    },
    {
      id: "2",
      name: "Acme Baby Onesie",
      price: 10,
      imageUrl: "/images/products/baby-onesie-beige-1.avif",
    },
    {
      id: "3",
      name: "Acme Baby Cap",
      price: 10,
      imageUrl: "/images/products/baby-cap-black.avif",
    },
    {
      id: "4",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "5",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "6",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "7",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "8",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "9",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "10",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "11",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
    {
      id: "12",
      name: "Acme Mug",
      price: 15,
      imageUrl: "/images/products/mug-1.avif",
    },
  ] satisfies Product[];

  const footerMenuItems = [
    { text: "Home", path: "#" },
    { text: "About", path: "#" },
    { text: "Terms & Conditions", path: "#" },
    { text: "Shipping & Return Policy", path: "#" },
    { text: "Privacy Policy", path: "#" },
    { text: "FAQ", path: "#" },
  ] satisfies FooterMenuItem[];

  return (
    <StoreTemplate
      isCartOpen={isCartOpen}
      onCartOpen={handleCartOpen}
      onCartClose={handleCartClose}
      footerMenuItems={footerMenuItems}
    >
      <TopFeaturedProducts bigItem={bigItem} topRightItems={topRightItems} />

      <ProductCarousel products={carouselItems} />
    </StoreTemplate>
  );
}
