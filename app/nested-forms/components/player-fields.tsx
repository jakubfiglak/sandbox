import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { type CreateTeamInput } from "../schemas";

type PlayerFieldsProps = {
  control: Control<CreateTeamInput>;
  index: number;
};

export const PlayerFields = ({ control, index }: PlayerFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
        name={`players.${index}.firstName`}
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
        name={`players.${index}.lastName`}
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
        name={`players.${index}.number`}
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
