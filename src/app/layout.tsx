/**
 * This is a route layout (contains header, main, and footer sections).
 */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/header";
import "@styles/globals.css"; // Ensure this is necessary
import Footer from "@components/footer";
import Head from "next/head";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Sookshum Labs: Custom Software Development Company",
  description:
    "Sookshum Labs is a custom software development company specializing in full-stack development for web and mobile solutions. We excel in building high-quality eCommerce platforms, websites, web apps, and mobile apps tailored to your business needs. ur expertise ensures scalable, secure, and high-performing software that helps businesses thrive in the digital age. Partner with Sookshum Labs to create innovative and reliable solutions that drive growth and success.",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap", // Keep this for better loading experience
  weight: ["400", "500", "600"], // Reduce weights to those actually used
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <link rel="preload" href="/home/hero/fallback.webp" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-black">
        <div className="flex flex-col justify-between !font-poppins !bg-black text-white w-full max-w-screen overflow-hidden min-h-[100vh]">
          <Header />
          <div className="!bg-black z-10 relative grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
