import DefaultEcommercePage from "@components/services/e-commerce/landing-page";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const EcommerceDevelopment: NextPage = () => {
  const isBot = is_Bot();
  return <DefaultEcommercePage isBot={isBot}/>;
};

export default EcommerceDevelopment;
