/**
 * Route Component.
 */
export const d = "force-dynamic";

const Sections = dynamic(() => import("@components/home"), {
  ssr: false,
  loading: () => <Loading />,
});
import dynamic from "next/dynamic";
// import { headers } from "next/headers";
import { Suspense } from "react";
import Loading from "./loading";

export interface HomeProps {
  isBot: boolean;
}

export function is_Bot() {
  let is_bot = false;
  // is_bot = headers().get("x-is-bot")
  //   ? headers().get("x-is-bot") === "true"
  //   : is_bot;
  return is_bot;
}

const Home: React.FC = () => {
  const isBot = is_Bot();
  return (
    <Suspense fallback={null}>
      <Sections isBot={isBot} />
    </Suspense>
  );
};

export default Home;
