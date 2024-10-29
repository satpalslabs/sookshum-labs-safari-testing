/**
 * This is a route layout (contains header, main, and footer sections).
 */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/header";
import "@styles/globals.css";
import Footer from "@components/footer";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png", // Apple touch icon for iOS devices
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: "Sookshum Labs: Custom Software Development Company",
  description:
    "Sookshum Labs offers custom full-stack development for web and mobile, delivering tailored eCommerce platforms, websites, and apps to meet your business needs.",
  keywords: [
    "Custom Software Development",
    "Full-stack Development",
    "Web Development",
    "Mobile App Development",
    "eCommerce Development",
  ],
  openGraph: {
    title: "Sookshum Labs: Custom Software Development Company",
    description:
      "Sookshum Labs offers custom full-stack development for web and mobile, delivering tailored eCommerce platforms, websites, and apps to meet your business needs.",
    url: "https://www.sookshumlabs.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 400,
        height: 400,
        alt: "Sookshum Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og-image.png",
        width: 400,
        height: 400,
        alt: "Sookshum Labs Logo",
      },
    ],
    title: "Sookshum Labs: Custom Software Development Company",
    description:
      "Sookshum Labs offers custom full-stack development for web and mobile, delivering tailored eCommerce platforms, websites, and apps to meet your business needs.",
    site: "https://www.sookshumlabs.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1.0",
};

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "fallback", // Keep this for better loading experience
  weight: ["300", "400", "500", "600", "700", "800"], // Font weights that we used
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <Head>
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
      <GoogleAnalytics gaId="G-G8NZYDBNBL" />
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
