"use client";

import NavBar from "../components/NavBar";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/providers/ThemeProvider";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const isHome = path === "/";
  return (
    <html className="h-full" lang="en">
      {/* <Head>
        <title>the title of the page </title>
      </Head> */}

      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className=" min-h-screen max-w-3xl mx-auto px-6 sm:px-8 mt-8  ">
            <NavBar />
            <div className="mt-24"> {children}</div>
            {isHome ? null : (
              <div className="  mt-5">
                <Link className="text-blue-500" href="/">← Back to Home</Link>
              </div>
            )}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
