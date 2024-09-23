import { is_Bot } from "@app/page";
import LandingPageLowCodeDevelopment from "@components/services/low-code-development/landing-page";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';
// import { headers } from "next/headers";

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <LandingPageLowCodeDevelopment isBot={isBot}/>;
};

export default LowCodeDevelopmentServices;
