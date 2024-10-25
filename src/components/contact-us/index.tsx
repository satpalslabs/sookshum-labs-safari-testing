// import Faqs from "@components/services/reuseable-components/faqs";

import Hero from "./hero";
import ContactForm from "./contact-form";
import Mediums from "./medium-to-connect";
import BottomSection from "./get-in-touch";
import ZohoSalesIQWidget from "@components/ZohoSalesIQWidget";
import GoTopButton from "@components/basic-components/go-to-top";
const ContactUs: React.FC = () => (
  <div>
    <Hero />
    <ContactForm />
    <Mediums />
    <BottomSection />
    <ZohoSalesIQWidget />
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"} /> */}
    <GoTopButton />
  </div>
);

export default ContactUs;
