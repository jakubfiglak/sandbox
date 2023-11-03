"use client";

import { GoalTypeStep } from "./goal-type-step";
import { onboardingFlowMachine } from "../machine";
import { useMachine } from "@xstate/react";

export const Flow = () => {
  const [current, send] = useMachine(onboardingFlowMachine);

  return (
    <div>
      <GoalTypeStep
        onSubmit={({ goalType }) =>
          send("CONFIRM_GOAL_TYPE", { data: { id: goalType } })
        }
        onGoalTypeChange={(goalType) =>
          send("SELECT_GOAL_TYPE", { data: goalType })
        }
      />
      <pre>{JSON.stringify(current, null, 2)}</pre>
    </div>
  );
};
