/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "UI and UX Design Services | Sookshum Labs",
  description:"Enhance user experience with our UI/UX design services. Intuitive, engaging, and tailored designs that improve usability and drive customer satisfaction."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
