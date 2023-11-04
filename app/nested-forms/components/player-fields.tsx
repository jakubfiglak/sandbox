import type { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type PlayerFieldsProps<T extends FieldValues> = {
  control: Control<T>;
  firstNameFieldName: FieldPath<T>;
  lastNameFieldName: FieldPath<T>;
  numberFieldName: FieldPath<T>;
};

export const PlayerFields = <T extends FieldValues>({
  control,
  firstNameFieldName,
  lastNameFieldName,
  numberFieldName,
}: PlayerFieldsProps<T>) => {
  return (
    <>
      <FormField
        control={control}
        name={firstNameFieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input placeholder="Jamie" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={lastNameFieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Tartt" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={numberFieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number</FormLabel>
            <FormControl>
              <Input placeholder="11" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
