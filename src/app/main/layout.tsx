import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import NavBar from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio by Matt",
  description: "My portfolio",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
