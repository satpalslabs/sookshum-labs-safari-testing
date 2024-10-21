import NestJS_DevelopmentServices from "@components/services/web-app-development/nestjs-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <NestJS_DevelopmentServices isBot={isBot} />;
};

export default LowCodeDevelopmentServices;
