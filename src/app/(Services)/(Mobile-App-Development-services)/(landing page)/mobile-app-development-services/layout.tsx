/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mobile App Development Services | Sookshum Labs",
  description:"Custom mobile app development services to elevate your brand. Scalable, user-friendly, and high-performance apps for iOS and Android to grow your business."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
