import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";

const Home = async () => {
  // const trpc = useTRPC();
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.heloAI.queryOptions({ text: "Gjenis" }));

  // const { data } = useQuery(trpc.heloAI.queryOptions({ text: "Antonio" }));
  // const data = await caller.heloAI({ text: "Gjenis" });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading ...</p>}></Suspense>
    </HydrationBoundary>
  );
};

export default Home;
