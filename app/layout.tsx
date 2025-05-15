import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inconsolata = localFont({
  src: "./fonts/Inconsolata.ttf",
  variable: "--font-inconsolata",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jordan Barton's Portfolio",
  description: "Mid-level Software Engineer Portfolio",
  openGraph: {
    title: "Jordan Barton's Portfolio",
    description: "Mid-level Software Engineer Portfolio",
    url: "jordanbarton.dev",
    images: "https://jordan-barton.dev/favicon.png",
  },
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
