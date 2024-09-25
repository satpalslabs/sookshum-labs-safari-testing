import { headers } from "next/headers";

function is_Bot() {
    const isBotHeader = headers().get("x-is-bot");
    return isBotHeader ? isBotHeader === "true" : false;
}
export default is_Bot