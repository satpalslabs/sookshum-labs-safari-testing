import Appsmith_DevelopmentServices from "@components/services/low-code-development/appsmith-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Appsmith_DevelopmentServices isBot={isBot} />;
};

export default LowCodeDevelopmentServices;
