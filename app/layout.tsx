import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inconsolataMedium = localFont({
  src: "./fonts/Inconsolata-Medium.ttf",
  variable: "--font-inconsolata-medium",
  weight: "100 900",
});

{/** TODO: Add favion and OG tags */}
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
      <body className={`${inconsolataMedium.variable} antialiased`}>{children}</body>
    </html>
  );
}
