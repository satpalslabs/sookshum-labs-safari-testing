/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Sookshum Labs",
  description:"Explore our range of digital services tailored to drive growth. From web and mobile development to eCommerce and admin solutions, we turn ideas into results."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
