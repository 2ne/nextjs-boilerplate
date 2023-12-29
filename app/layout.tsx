import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "James Toone",
  description: "Portfolio",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-zinc-950 text-zinc-100 min-h-screen selection:bg-zinc-500/25 [color-scheme:dark] ${sans.variable} ${serif.variable}`}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
