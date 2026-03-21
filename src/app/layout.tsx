import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Charity Golf Tournaments & Nonprofit Fundraising Kansas City | Serving Kingdom KC",
  description: "Serving Kingdom KC unites businesses and communities through premium charity golf tournaments to support local nonprofits in Kansas City. Become a corporate sponsor or register your team today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}