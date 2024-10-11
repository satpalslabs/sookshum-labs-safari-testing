
import Magento_DevelopmentServices from "@components/services/eCommerce-development-services/magento-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = 'force-dynamic';

const MagentoDevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Magento_DevelopmentServices isBot={isBot}/>;
};

export default MagentoDevelopmentServices;
