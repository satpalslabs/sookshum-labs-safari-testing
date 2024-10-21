import LandingPageUI_DesignComponent from "@components/services/ui-ux-design/landing-page-ui-design";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
// import { headers } from "next/headers";
export const dynamic = "force-dynamic";

const MobileAppUI_Design: NextPage = () => {
  const isBot = is_Bot();
  return <LandingPageUI_DesignComponent isBot={isBot} />;
};

export default MobileAppUI_Design;
