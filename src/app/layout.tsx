import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Txchyon Labs | Advanced Trading Intelligence",
  description: "Institutional-grade market intelligence and execution hub. Powered by the Txchyon data engine.",
  metadataBase: new URL("https://txchyon.com"),
  alternates: {
    canonical: "/labs",
  },
  openGraph: {
    title: "Txchyon Labs | Advanced Trading Intelligence",
    description: "Institutional-grade market intelligence and execution hub.",
    url: "/labs",
    siteName: "Txchyon Labs",
    images: [
      {
        url: "/images/og-labs.jpg", // Ensure this exists or falls back
        width: 1200,
        height: 630,
        alt: "Txchyon Labs Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Txchyon Labs | Advanced Trading Intelligence",
    description: "Institutional-grade market intelligence and execution hub.",
    images: ["/images/og-labs.jpg"],
    creator: "@Txchyon",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
