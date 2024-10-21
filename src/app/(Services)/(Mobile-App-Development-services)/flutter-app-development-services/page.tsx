import Flutter_DevelopmentServices from "@components/services/mobile-app-development/flutter-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Flutter_DevelopmentServices isBot={isBot} />;
};

export default LowCodeDevelopmentServices;
