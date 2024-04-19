import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppQuasar - The One-Stop solution to your marketing needs",
  description:
    "AppQuasar is performance based online advertising platform that provides simplified and programmatic digital advertising solutions to help businesses grow better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"${inter.className} bg-[#daf4dc]"}>{children}</body>
    </html>
  );
}
