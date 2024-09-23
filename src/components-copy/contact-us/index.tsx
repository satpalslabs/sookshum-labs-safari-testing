import Faqs from "@components/services/reuseable-components/faqs";
import React from "react";
import Hero from "./hero";
import ContactForm from "./contact-form";
import Mediums from "./medium-to-connect";
import BottomSection from "./get-in-touch";
import ZohoSalesIQWidget from '@components/ZohoSalesIQWidget'
const ContactUs: React.FC = () => (
  <div>
    <Hero />
    <ContactForm />
    <Mediums />
    <BottomSection />
    {/* <script
      dangerouslySetInnerHTML={{
        __html: `var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { mode: "async", widgetcode: "siq9569795c2af6dac0818cee990f36c0d731470acc86287e49524d79a290df1b08", values: {}, ready: function () { } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.com/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); d.write("<div id='zsiqwidget'></div>")`,
      }}
    /> */}
    <ZohoSalesIQWidget />
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"} /> */}
  </div>
);

export default ContactUs;
