/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Sookshum Labs",
  description:"Learn how we protect your data. Our Privacy Policy outlines the practices we follow to ensure your information is secure, private, and handled with care."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
