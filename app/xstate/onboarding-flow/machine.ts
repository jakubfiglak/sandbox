import { assign, createMachine } from "xstate";
import type { GoalType } from "./types";

type OnboardingFlowMachineContext = {
  goalType?: string;
  isCustomGoalTypeSelected: boolean;
};

type OnboardingFlowMachineEvent =
  | {
      type: "BACK";
    }
  | { type: "SELECT_GOAL_TYPE"; data: GoalType }
  | { type: "CONFIRM_GOAL_TYPE"; data: { id: string } };

type OnboardingFlowMachineState = {
  value: "selectingGoalType";
  context: OnboardingFlowMachineContext;
};

export const onboardingFlowMachine = createMachine<
  OnboardingFlowMachineContext,
  OnboardingFlowMachineEvent,
  OnboardingFlowMachineState
>(
  {
    id: "onboarding-flow",
    predictableActionArguments: true,
    initial: "selectingGoalType",
    context: {
      goalType: undefined,
      isCustomGoalTypeSelected: false,
    },
    states: {
      selectingGoalType: {
        on: {
          SELECT_GOAL_TYPE: {
            actions: ["setIsCustomGoalSelected"],
          },
          CONFIRM_GOAL_TYPE: {
            actions: ["assignGoalTypeToContext"],
          },
        },
      },
    },
  },
  {
    actions: {
      setIsCustomGoalSelected: assign((_, event) => {
        if (event.type !== "SELECT_GOAL_TYPE") {
          return {};
        }
        return { isCustomGoalTypeSelected: event.data.requiresCustomLabel };
      }),
      assignGoalTypeToContext: assign((_, event) => {
        console.log(event);

        if (event.type !== "CONFIRM_GOAL_TYPE") {
          return {};
        }
        return { goalType: event.data.id };
      }),
    },
  }
);
