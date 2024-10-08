import is_Bot from "@lib/is-bot";
import ServiceComponent from "@components/services/landing-page";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const Services: NextPage = () => {
  const isBot = is_Bot();
  return <ServiceComponent isBot={isBot}/>;
};

export default Services;
