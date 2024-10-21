import WebsiteUI_DesignComponent from "@components/services/ui-ux-design/website-ui-design";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
// import { headers } from "next/headers";
export const dynamic = "force-dynamic";

const WebsiteUI_Design: NextPage = () => {
  const isBot = is_Bot();
  return <WebsiteUI_DesignComponent isBot={isBot} />;
};

export default WebsiteUI_Design;
