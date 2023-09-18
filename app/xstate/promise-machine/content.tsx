"use client";

import { useMachine } from "@xstate/react";
import { promiseMachine } from "./machine";

export const Content = () => {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div>
      {/** You can listen to what state the service is in */}
      {state.matches("pending") && <p>Loading...</p>}
      {state.matches("rejected") && <p>Promise Rejected</p>}
      {state.matches("resolved") && <p>Promise Resolved</p>}
      <div>
        {/** You can send events to the running service */}
        <button
          onClick={() => {
            console.log("RESOLVING");
            return send("RESOLVE");
          }}
        >
          Resolve
        </button>
        <button
          onClick={() => {
            console.log("REJECTING");
            return send("REJECT");
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
