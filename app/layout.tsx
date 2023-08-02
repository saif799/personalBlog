"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

      <body className="border-t-8">
        <div className=" min-w-[350px] m-auto w-[97%] max-w-[850px]  h-full mt-8  ">
          <NavBar />
          <div className="mt-24"> {children}</div>
          {isHome ? null : (
            <div className=" text-blue-500 mt-5">
              <Link href="/">← Back to home</Link>
            </div>
          )}
          <Footer />
        </div>
      </body>
    </html>
  );
}
