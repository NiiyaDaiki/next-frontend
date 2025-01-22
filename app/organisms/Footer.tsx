// app/components/organisms/Footer.tsx
import { FooterMenuItem } from "@/app/atoms/FooterMenuItem";
import { FooterMenu } from "@/app/molecules/FooterMenu";
import LogoSquare from "@/app/molecules/LogoSquare";
import React from "react";

type Props = {
  menuItems: FooterMenuItem[];
};

export default function Footer({ menuItems }: Props) {
  return (
    <div>
      <footer className="bg-neutral-900 text-neutral-400 text-sm ">
        <div className="max-w-7xl w-full mx-auto px-6 py-12 flex gap-12 border-t border-neutral-700">
          {/* 上部: ロゴタイトル & リンク群 */}
          <div className="">
            <div className="flex items-center gap-2">
              <LogoSquare size="sm" />
              <div className="text-white font-semibold">ACME STORE</div>
            </div>
          </div>
          <FooterMenu items={menuItems} />
        </div>
      </footer>

      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700 text-neutral-400">
        <div className="flex max-w-7xl mx-auto items-center">
          <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-neutral-200">
            {" "}
            View the source
          </a>
        </div>
      </div>
    </div>
  );
}
