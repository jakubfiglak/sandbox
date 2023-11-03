import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type PlayerFieldsProps = {
  control: Control<any>;
  index?: number;
};

export const PlayerFields = ({ control, index }: PlayerFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
        name={
          typeof index === "number" ? `players.${index}.firstName` : "firstName"
        }
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
        name={
          typeof index === "number" ? `players.${index}.lastName` : "lastName"
        }
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
        name={typeof index === "number" ? `players.${index}.number` : "number"}
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
