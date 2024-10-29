/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "eCommerce Development Services | Sookshum Labs",
  description:
    "Boost your online sales with expert eCommerce development services. Custom, secure, and scalable solutions to create a seamless shopping experience for your customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
