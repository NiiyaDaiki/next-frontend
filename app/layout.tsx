import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACME STORE",
  description: "ACME Store Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* Main content area */}
        <div>{children}</div>
      </body>
    </html>
  );
}
