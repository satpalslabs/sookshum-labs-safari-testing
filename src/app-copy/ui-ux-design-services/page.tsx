import { is_Bot } from "@app/page";
import UiUxDesignComponent from "@components/services/ui-ux-design";
import { NextPage } from "next";
// import { headers } from "next/headers";
export const dynamic = 'force-dynamic';

const UiUxDesign: NextPage = () => {

    const isBot = is_Bot();  
    return <UiUxDesignComponent isBot={isBot}/>;
};

export default UiUxDesign;
