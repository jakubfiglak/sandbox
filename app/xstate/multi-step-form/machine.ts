import { assign, createMachine } from "xstate";

type BeneficiaryInfo = {
  name: string;
  amount: number;
  currency: string;
};

type DateInfo = {
  preferredDate: string;
};

export type MultiStepFormMachineContext = {
  beneficiaryInfo?: BeneficiaryInfo;
  dateInfo?: DateInfo;
  errorMessage?: string;
};

export type MultiStepFormMachineEvent =
  | { type: "BACK" }
  | { type: "CONFIRM_BENEFICIARY"; info: BeneficiaryInfo }
  | { type: "CONFIRM_DATE"; info: DateInfo }
  | { type: "CONFIRM" };

type MultiStepFormMachineState =
  | { value: "enteringBeneficiary"; context: MultiStepFormMachineContext }
  | { value: "enteringDate"; context: MultiStepFormMachineContext }
  | { value: "confirming"; context: MultiStepFormMachineContext }
  | {
      value: "success";
      context: MultiStepFormMachineContext;
    };

export const multiStepFormMachine = createMachine<
  MultiStepFormMachineContext,
  MultiStepFormMachineEvent,
  MultiStepFormMachineState
>(
  {
    id: "multi-step-form",
    predictableActionArguments: true,
    initial: "enteringBeneficiary",
    context: {
      beneficiaryInfo: undefined,
      dateInfo: undefined,
      errorMessage: undefined,
    },
    states: {
      enteringBeneficiary: {
        on: {
          CONFIRM_BENEFICIARY: [
            {
              target: "enteringDate",
              actions: ["assignBeneficiaryInfoToContext"],
            },
            "enteringDate",
          ],
        },
      },
      enteringDate: {
        id: "enteringDate",
        on: {
          BACK: {
            target: "enteringBeneficiary",
          },
          CONFIRM_DATE: {
            target: "confirming",
            actions: ["assignDateToContext"],
          },
        },
      },
      confirming: {
        onDone: {
          target: "success",
        },
        initial: "idle",
        states: {
          idle: {
            exit: ["clearErrorMessage"],
            on: {
              CONFIRM: "submitting",
              BACK: {
                target: "#enteringDate",
              },
            },
          },
          submitting: {
            invoke: {
              src: "submitPayment",
              onDone: {
                target: "complete",
              },
              onError: {
                target: "idle",
                actions: "assignErrorMessageToContext",
              },
            },
          },
          complete: { type: "final" },
        },
      },
      success: { type: "final" },
    },
  },
  {
    services: {
      submitPayment: () => () => {},
    },
    actions: {
      assignDateToContext: assign((_, event) => {
        if (event.type !== "CONFIRM_DATE") {
          return {};
        }
        return { dateInfo: event.info };
      }),
      assignBeneficiaryInfoToContext: assign((_, event) => {
        if (event.type !== "CONFIRM_BENEFICIARY") {
          return {};
        }
        return { beneficiaryInfo: event.info };
      }),
      assignErrorMessageToContext: assign((_, event: any) => {
        return {
          errorMessage: event.data?.message || "An unknown error ocurred",
        };
      }),
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
    },
  }
);
