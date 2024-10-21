import WebAppUI_DesignComponent from "@components/services/ui-ux-design/web-app-ui-design";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
// import { headers } from "next/headers";
export const dynamic = "force-dynamic";

const WebAppUI_Design: NextPage = () => {
  const isBot = is_Bot();
  return <WebAppUI_DesignComponent isBot={isBot} />;
};

export default WebAppUI_Design;
