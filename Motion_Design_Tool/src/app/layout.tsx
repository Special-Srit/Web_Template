import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Motionix — Design Motion, Without Limits",
  description:
    "The professional-grade timeline editor for UI animation, product demos, and cinematic motion graphics. Export to Lottie, CSS, MP4, WebM, or GIF in one click.",
  keywords: ["motion design", "animation tool", "timeline editor", "Lottie", "UI animation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
