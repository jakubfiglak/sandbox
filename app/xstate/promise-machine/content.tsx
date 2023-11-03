"use client";

import { useMachine } from "@xstate/react";
import { promiseMachine } from "./machine";
import { Button } from "@/components/ui/button";

export const Content = () => {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div className="text-center space-y-4">
      {/** You can listen to what state the service is in */}
      {state.matches("pending") && <p>Loading...</p>}
      {state.matches("rejected") && <p>Promise Rejected</p>}
      {state.matches("resolved") && <p>Promise Resolved</p>}
      <div className="flex items-center gap-4">
        {/** You can send events to the running service */}
        <Button onClick={() => send("RESOLVE")}>Resolve</Button>
        <Button onClick={() => send("REJECT")} variant="destructive">
          Reject
        </Button>
      </div>
    </div>
  );
};
