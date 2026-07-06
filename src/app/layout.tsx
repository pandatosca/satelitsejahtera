import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SATSET - Your Digital Excellence Partner",
  description: "Fast, reliable, and affordable IT solutions for modern enterprises. Enterprise software, custom development, IT integration, and 24/7 support.",
  keywords: ["IT solutions", "software development", "enterprise", "technology", "Indonesia"],
  openGraph: {
    title: "SATSET - Your Digital Excellence Partner",
    description: "Transform your business with cutting-edge IT solutions",
    url: "https://satelit-sejahtera.com",
    siteName: "SATSET",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col bg-white text-primary-black antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
