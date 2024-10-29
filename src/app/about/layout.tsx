/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "About Us | Sookshum Labs",
  description:"Discover our mission, values, and team. Learn how our expertise and passion drive innovative digital solutions to help your business achieve success."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Head>
      <div>{children}</div>
    </div>
  );
}
