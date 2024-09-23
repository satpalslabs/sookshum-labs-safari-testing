/**
 * This is a route layout (contains header, main and footer sections).
 */

import type { Metadata } from "next";
import Header from "../components/header";
import "@styles/globals.css";
import Footer from "@components/footer";
import Head from "next/head";
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Sookshum Labs: Custom Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { mode: "async", widgetcode: "siq9569795c2af6dac0818cee990f36c0d731470acc86287e49524d79a290df1b08", values: {}, ready: function () { } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.com/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); d.write("<div id='zsiqwidget'></div>")`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `$zoho.salesiq.ready=function(){ $zoho.salesiq.floatwindow.visible('show'); $zoho.salesiq.chatwindow.closebutton('hide');}`,
          }}
        />
      </Head>
      <body>
        <div className="flex flex-col justify-between font-400 !bg-black text-white w-full max-w-screen overflow-x-hidden min-h-[100vh]">
          <Header />
          <div className="!bg-black z-10 relative grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
