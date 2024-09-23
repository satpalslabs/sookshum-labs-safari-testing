/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
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
    <div>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Head>
      <div>{children}</div>
    </div>
  );
}
