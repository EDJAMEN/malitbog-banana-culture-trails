import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Spotlight from "../components/spotlight";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saging sa Malitbog — Banana Farming in Bukidnon",
  description:
    "Smallholder farms, agrarian cooperatives, and farm-to-market banana production in Malitbog, Bukidnon.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Spotlight />
      </body>
    </html>
  );
}
