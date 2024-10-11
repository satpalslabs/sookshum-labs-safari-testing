import Laravel_DevelopmentServices from "@components/services/web-app-development/laravel-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Laravel_DevelopmentServices isBot={isBot}/>;
};

export default LowCodeDevelopmentServices;
