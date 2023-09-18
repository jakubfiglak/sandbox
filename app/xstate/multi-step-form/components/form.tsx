"use client";

import { useMachine } from "@xstate/react";
import { BeneficiaryForm } from "./beneficiary-form";
import { DateForm } from "./date-form";
import { multiStepFormMachine } from "../machine";

export const Form = () => {
  const [state, send] = useMachine(multiStepFormMachine);

  switch (state.value) {
    case "enteringBeneficiary":
      return (
        <BeneficiaryForm
          onSubmit={(data) => send("CONFIRM_BENEFICIARY", { info: data })}
        />
      );

    case "enteringDate":
      return (
        <DateForm
          onSubmit={(data) => send("CONFIRM_DATE", { info: data })}
          onBackClick={() => send("BACK")}
        />
      );

    default:
      return (
        <div>
          <pre>{JSON.stringify(state.context, null, 2)}</pre>
        </div>
      );
  }
};
