/**
 * Route Component.
 */
export const d = "force-dynamic";

import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { Suspense, useMemo } from "react";

const Sections = dynamic(() => import("@components/home"));

export interface HomeProps {
  isBot: boolean;
}

export function is_Bot() {
  const isBotHeader = headers().get("x-is-bot");
  return isBotHeader ? isBotHeader === "true" : false;
}

const Home: React.FC = () => {
  const isBot = useMemo(() => is_Bot(), []);
  return (
    <Suspense fallback={null}>
      <Sections isBot={isBot} />
    </Suspense>
  );
};

export default Home;
