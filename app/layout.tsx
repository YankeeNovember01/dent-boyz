import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Dent Boyz | North Dallas PDR & Auto Hail Damage Repair",
    template: "%s | Dent Boyz",
  },
  description:
    "Dent Boyz specializes in paintless dent repair (PDR) and auto hail damage restoration in North Dallas, TX. Fast, affordable, and insurance-approved.",
  keywords: [
    "PDR",
    "paintless dent repair",
    "hail damage repair",
    "auto body",
    "North Dallas",
    "dent removal",
  ],
  metadataBase: new URL("https://dent-boyz.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dent-boyz.com",
    siteName: "Dent Boyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        {/* Global Nav */}
        <header className="bg-brand-dark text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">
              🔧 Dent Boyz
            </a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-brand-red transition-colors">
                Home
              </a>
              <a href="/services" className="hover:text-brand-red transition-colors">
                Services
              </a>
              <a href="/about" className="hover:text-brand-red transition-colors">
                About
              </a>
              <a href="/contact" className="hover:text-brand-red transition-colors">
                Contact
              </a>
            </nav>
            <a
              href="/contact"
              className="bg-brand-red text-white px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition"
            >
              Get a Free Quote
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-brand-dark text-gray-400 text-center py-6 text-sm">
          <p>© {new Date().getFullYear()} Dent Boyz. All rights reserved. | North Dallas, TX</p>
        </footer>
      </body>
    </html>
  );
}
