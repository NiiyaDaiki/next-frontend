// app/templates/StoreTemplate.tsx
"use client";
import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import CartDrawer from "../organisms/CartDrawer";
import { FooterMenuItem } from "@/app/atoms/FooterMenuItem";

type StoreTemplateProps = {
  children: React.ReactNode;
  isCartOpen: boolean;
  onCartOpen: () => void;
  onCartClose: () => void;
  footerMenuItems: FooterMenuItem[];
};

export default function StoreTemplate({
  children,
  isCartOpen,
  onCartOpen,
  onCartClose,
  footerMenuItems,
}: StoreTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900  text-white">
      <Header onCartOpen={onCartOpen} />

      <main>{children}</main>

      <Footer menuItems={footerMenuItems} />

      <CartDrawer isOpen={isCartOpen} onClose={onCartClose} />
    </div>
  );
}
