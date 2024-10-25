
import NextJS_DevelopmentServices from "@components/services/web-app-development/nextjs-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const NextJSDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <NextJS_DevelopmentServices isBot={isBot}/>;
};

export default NextJSDevelopmentServices;
