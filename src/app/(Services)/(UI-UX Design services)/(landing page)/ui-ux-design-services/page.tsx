import UiUxDesignComponent from "@components/services/ui-ux-design/landing-page";
import is_Bot from "@lib/is-bot";
import { NextPage } from "next";
// import { headers } from "next/headers";
export const dynamic = 'force-dynamic';

const UiUxDesign: NextPage = () => {

    const isBot = is_Bot();  
    return <UiUxDesignComponent isBot={isBot}/>;
};

export default UiUxDesign;
