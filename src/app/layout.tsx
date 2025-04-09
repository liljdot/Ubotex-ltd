import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Ubotex Nigeria",
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
