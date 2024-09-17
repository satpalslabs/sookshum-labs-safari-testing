/**
 * Route Component.
 */
// export const dynamic = 'force-dynamic';

import Sections from "@components/home";
// import { headers } from "next/headers";
import { Suspense } from "react";

export interface HomeProps {
  isBot: boolean;
}

// export function is_Bot() {
//   let is_bot = false;
//   is_bot = headers().get("x-is-bot")
//     ? headers().get("x-is-bot") === "true"
//     : is_bot;
//   return is_bot;
// }

export default function Home() {
  const isBot = false;
  return (
    <Suspense fallback={null}>
      <Sections isBot={isBot} />
    </Suspense>
  );
}
