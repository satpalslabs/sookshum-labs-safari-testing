import ContactUs from "@components/contact-us";
import { NextPage } from "next";
import SalesIQ from "../../components/ZohoSalesIQWidget";

const Contact: NextPage = () => {
  return (
    <div>
      <ContactUs />
      <SalesIQ />
    </div>
  );
};

export default Contact;
