import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
})

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ubotex Limited",
  description: "From quality building materials to exceptional hospitality and fine wines, Ubotex Limited turns aspirations into reality. Whether you're constructing, unwinding, or celebrating, we deliver excellence at every step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} antialiased w-screen items-center overflow-x-hidden`}
        data-theme="light"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
