import Payload_CMS_DevelopmentServices from "@components/services/headless-development-services/payload-cms-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const HeadlessCMSDevelopment: NextPage = () => {
  const isBot = is_Bot();
  return <Payload_CMS_DevelopmentServices isBot={isBot} />;
};

export default HeadlessCMSDevelopment;
