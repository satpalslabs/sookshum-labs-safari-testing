/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/header";
import "@styles/globals.css";
import Footer from "@components/footer";
import Head from "next/head";
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Sookshum Labs: Custom Software Development Company",
  description:
    " We build modern digital products for startups and enterprises around the globe.",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
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
        <link rel="preload" href="/home/hero/fallback.webp" as="image" />
      </Head>
      <body>
        <div className="flex flex-col justify-between !font-poppins !bg-black text-white w-full max-w-screen overflow-hidden min-h-[100vh]">
          <Header />
          <div className="!bg-black z-10 relative grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
