
import LandingPageWebSiteDevelopment from "@components/services/website-development/landing-page";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const WebsiteDevelopmentService: NextPage = () => {
  const isBot = is_Bot();
  return <LandingPageWebSiteDevelopment isBot={isBot} />;
};

export default WebsiteDevelopmentService;
