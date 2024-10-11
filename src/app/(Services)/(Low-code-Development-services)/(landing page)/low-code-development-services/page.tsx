import LandingPageLowCodeDevelopment from "@components/services/low-code-development/landing-page";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <LandingPageLowCodeDevelopment isBot={isBot}/>;
};

export default LowCodeDevelopmentServices;
