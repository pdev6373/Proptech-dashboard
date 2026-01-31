import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const euclidCircularB = localFont({
  src: [
    {
      weight: "400",
      path: "../public/fonts/Euclid Circular B Regular.ttf",
    },
    {
      weight: "500",
      path: "../public/fonts/Euclid Circular B Medium.ttf",
    },
    {
      weight: "600",
      path: "../public/fonts/Euclid Circular B SemiBold.ttf",
    },
    {
      weight: "700",
      path: "../public/fonts/Euclid Circular B Bold.ttf",
    },
  ],
});

export const metadata: Metadata = {
  title: "Expert Listing",
  description: "Expert Listing - The number one listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={euclidCircularB.className}>{children}</body>
    </html>
  );
}
