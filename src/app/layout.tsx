/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
import Header from "../components/header";
import "@styles/globals.css";
import Footer from "@components/footer";
import Head from "next/head";
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Sookshum Labs: Custom Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="preload"
          href="/home/hero/dots.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="stylesheet" />
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
      </Head>
      <body>
        <div className="flex flex-col justify-between font-400 !bg-black text-white w-full max-w-screen overflow-hidden min-h-[100vh]">
          <Header />
          <div className="!bg-black z-10 relative grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
