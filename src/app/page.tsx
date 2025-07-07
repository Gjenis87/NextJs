"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Home = () => {
  const trpc = useTRPC();

  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("background job started");
      },
      onError: (error) => {
        toast.error("Failed to start background job");
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "gjenis87@gmail.com" })}
      >
        Invoke background job
      </Button>
    </div>
  );
};

export default Home;
