import is_Bot from "@lib/is-bot";
import LandingPageMobileAppDevelopment from "@components/services/mobile-app-development/landing-page";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const MobileAppDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <LandingPageMobileAppDevelopment isBot={isBot}/>;
};

export default MobileAppDevelopmentServices;
