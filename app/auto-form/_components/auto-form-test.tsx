"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { userInputSchema, type UserInput } from "../schemas/user";

type UserFormProps = {
  defaultValues?: Partial<UserInput>;
};

export const UserForm = ({ defaultValues }: UserFormProps) => {
  return (
    <AutoForm
      formSchema={userInputSchema}
      values={defaultValues}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      <AutoFormSubmit>Submit</AutoFormSubmit>
    </AutoForm>
  );
};
