import is_Bot from "@lib/is-bot";
import LandingPageWebAppDevelopment from "@components/services/web-app-development/landing-page";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const WebAppDevelopment: NextPage = () => {
  const isBot = is_Bot();
  return <LandingPageWebAppDevelopment isBot={isBot} />;
};

export default WebAppDevelopment;
