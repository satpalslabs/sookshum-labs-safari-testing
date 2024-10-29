/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web App Development Services | Sookshum Labs",
  description:
    "Custom web app development services to drive your business forward. Scalable, secure, and user-friendly solutions tailored to meet your unique needs and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
