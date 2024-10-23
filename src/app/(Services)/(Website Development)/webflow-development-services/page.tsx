import Webflow_Development from "@components/services/website-development/webflow-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const LowCodeDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Webflow_Development isBot={isBot} />;
};

export default LowCodeDevelopmentServices;
