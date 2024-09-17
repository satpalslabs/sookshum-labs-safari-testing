// import { is_Bot } from "@app/page";
import LandingPageWebAppDevelopment from "@components/services/web-app-development/landing-page";
import { NextPage } from "next";
// export const dynamic = "force-dynamic";

const WebAppDevelopment: NextPage = () => {
  const isBot = false
  return <LandingPageWebAppDevelopment isBot={isBot} />;
};

export default WebAppDevelopment;
