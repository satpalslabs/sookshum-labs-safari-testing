// import { is_Bot } from "@app/page";
import DefaultEcommercePage from "@components/services/e-commerce/landing-page";
import { NextPage } from "next";
// import { headers } from "next/headers";
// export const dynamic = 'force-dynamic';

const EcommerceDevelopment: NextPage = () => {
  const isBot = false;
  return <DefaultEcommercePage isBot={isBot}/>;
};

export default EcommerceDevelopment;
