// app/components/organisms/CartDrawer.tsx
"use client";
import React from "react";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full bg-neutral-900 text-white shadow-lg
        transition-all duration-300
        flex flex-col
        ${isOpen ? "w-80" : "w-0"}
        overflow-hidden
      `}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-800">
        <span className="font-bold">My Cart</span>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-neutral-200"
        >
          X
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {/* カートが空の例 */}
        <div className="text-center text-neutral-500 mt-8">
          Your cart is empty.
        </div>
      </div>
    </div>
  );
}
