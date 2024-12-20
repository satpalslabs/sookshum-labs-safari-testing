import Strapi_DevelopmentServices from "@components/services/headless-development-services/strapi-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const HeadlessCMSDevelopment: NextPage = () => {
  const isBot = is_Bot();
  return <Strapi_DevelopmentServices isBot={isBot} />;
};

export default HeadlessCMSDevelopment;
