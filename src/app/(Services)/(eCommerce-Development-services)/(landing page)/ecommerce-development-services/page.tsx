import DefaultEcommercePage from "@components/services/eCommerce-development-services/landing-page";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const EcommerceDevelopment: NextPage = () => {
  const isBot = is_Bot();
  return <DefaultEcommercePage isBot={isBot} />;
};

export default EcommerceDevelopment;
