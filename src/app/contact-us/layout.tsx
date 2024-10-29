/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Sookshum Labs",
  description:"Get in touch with our team for customized digital solutions. Contact us for inquiries, project discussions, or support—we're here to help your business thrive!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
