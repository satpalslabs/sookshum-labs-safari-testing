/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Low Code Development Services | Sookshum Labs",
  description:"Accelerate your development process with our low-code development services. Build scalable, efficient applications quickly with minimal coding expertise required."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
