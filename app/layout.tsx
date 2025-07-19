import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CTG Spa - Premium Spa & Wellness Center in Chattogram ",
  description:
    "Experience ultimate relaxation at ctg Spa BD. Premium spa and massage services in chattogram with expert therapists and modern facilities.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
