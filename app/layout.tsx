import NavBar from "@/components/NavBar";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      {/* <Head>
        <title>the title of the page </title>
      </Head> */}

      <body className="border-t-8">
        <div className=" min-w-[350px] m-auto w-[97%] max-w-[850px]  h-full mt-8  ">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
