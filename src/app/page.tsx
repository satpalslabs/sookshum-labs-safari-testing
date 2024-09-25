/**
 * Route Component.
 */
import is_Bot from "@lib/is-bot";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { Suspense, useMemo } from "react";

const Sections = dynamic(() => import("@components/home"));

export interface HomeProps {
  isBot: boolean;
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
