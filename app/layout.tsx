import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inconsolata = localFont({
  src: "./fonts/Inconsolata.ttf",
  variable: "--font-inconsolata",
  weight: "100 900",
});

{
  /** TODO: Add favion and OG tags */
}
export const metadata: Metadata = {
  title: "Jordan Barton's Portfolio",
  description: "Let's connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased`}>{children}</body>
    </html>
  );
}
