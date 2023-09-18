"use client";

import { useMachine } from "@xstate/react";
import { BeneficiaryForm } from "./beneficiary-form";
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
        <div>
          <pre>{JSON.stringify(state.context, null, 2)}</pre>
          <button onClick={() => send("CONFIRM_DATE")}>next</button>
        </div>
      );

    default:
  }
};
