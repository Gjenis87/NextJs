"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Cliet = () => {
  const trpc = useTRPC();
  const data = useSuspenseQuery(trpc.heloAI.queryOptions({ text: "Gjenis" }));

  return <div>{JSON.stringify(data)}</div>;
};
