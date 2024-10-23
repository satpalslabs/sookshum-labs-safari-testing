import WordPress_Development from "@components/services/website-development/wordpress-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const WordPressDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <WordPress_Development isBot={isBot} />;
};

export default WordPressDevelopmentServices;
