/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Website Development Services | Sookshum Labs",
  description:
    "Professional website development services tailored to grow your business. Fast, responsive, and SEO-friendly websites designed for a seamless user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
