import Admin_Development from "@components/services/admin-development-services";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

const Admin_DevelopmentServices: NextPage = () => {
  const isBot = is_Bot();
  return <Admin_Development isBot={isBot} />;
};

export default Admin_DevelopmentServices;
