import HeadlessCMSDevelopmentComponent from "@components/services/headless-development-services/landing-page";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const HeadlessCMSDevelopment: NextPage = () => {
  const isBot = is_Bot();
  return <HeadlessCMSDevelopmentComponent isBot={isBot} />;
};

export default HeadlessCMSDevelopment;
