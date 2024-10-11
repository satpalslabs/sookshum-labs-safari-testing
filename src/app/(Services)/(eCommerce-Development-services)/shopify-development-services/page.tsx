import Shopify_DevelopmentServices from "@components/services/eCommerce-development-services/shopify-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const ShopifyDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Shopify_DevelopmentServices isBot={isBot} />;
};

export default ShopifyDevelopmentServices;
