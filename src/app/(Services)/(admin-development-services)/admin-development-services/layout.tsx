/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Development Services | Sookshum Labs",
  description:"Streamline your operations with custom admin development services. Secure, efficient, and tailored admin tools to optimize workflow and manage your business effectively."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
