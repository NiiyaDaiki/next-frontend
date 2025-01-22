// app/components/organisms/Header.tsx
"use client";
import React from "react";

import LogoSquare from "@/app/molecules/LogoSquare";
import SearchIcon from "@/app/atoms/SearchIcon";
import CartIcon from "@/app/atoms/CartIcon";

export default function Header({ onCartOpen }: { onCartOpen: () => void }) {
  return (
    <header className="relative bg-neutral-900 py-4 px-6 flex items-center justify-between">
      <div className="relative flex w-full items-center">
        <div className="flex w-full md:w-1/3 items-center">
          <LogoSquare />
          <div className="ml-2 text-sm font-medium uppercase text-bold mr-6">
            Acme Store
          </div>

          <ul className="flex gap-6">
            <li>
              <a
                href="#"
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Shirts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Stickers
              </a>
            </li>
          </ul>
        </div>

        <div className="relative flex md:w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-3 py-2 rounded-md bg-transparent text-white  border dark:border-neutral-800"
          />
          <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
            <SearchIcon />
          </div>
        </div>

        <div className="flex justify-end md:w-1/3">
          <button aria-label="Open cart">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <CartIcon
                onClick={onCartOpen}
                className="h-4 transition-all ease-in-out hover:scale-110"
              ></CartIcon>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
