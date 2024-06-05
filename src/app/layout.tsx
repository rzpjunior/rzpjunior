import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["greek", "latin"] });

export const metadata: Metadata = {
  title: "Rizky Putra Junior",
  description: "rzpjunior.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    <div></div>
  );
}
