import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "James Toone · Lead Product Designer · Portfolio",
  description: "Bridging the gap between design and development.",
  openGraph: {
    title: "James Toone · Lead Product Designer · Portfolio",
    description: "Bridging the gap between design and development.",
    url: "https://jamestoone.design",
    siteName: "jamestoone.design",
    images: [
      {
        url: "https://jamestoone.design/og-image.png",
        width: 256,
        height: 256,
      },
    ],
    locale: "en_UK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-zinc-950 text-zinc-200 min-h-screen selection:bg-zinc-500/25 [color-scheme:dark] ${sans.variable} ${serif.variable}`}>
      <body className={`font-sans antialiased`}>
        {children} <SpeedInsights />
      </body>
    </html>
  );
}
