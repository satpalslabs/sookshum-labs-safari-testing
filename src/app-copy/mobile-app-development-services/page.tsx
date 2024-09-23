// import { is_Bot } from "@app/page";
import LandingPageMobileAppDevelopment from "@components/services/mobile-app-development/landing-page";
import { NextPage } from "next";
// export const dynamic = 'force-dynamic';

const MobileAppDevelopmentServices: NextPage = () => {
    const isBot = false;
  return <LandingPageMobileAppDevelopment isBot={isBot}/>;
};

export default MobileAppDevelopmentServices;
