"use client";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { goalTypes } from "@/app/xstate/onboarding-flow/data";
import type { GoalType } from "../types";

const formSchema = z.object({
  goalType: z.string().nonempty(),
});

type GoalTypeStepProps = {
  onGoalTypeChange: (goalType: GoalType) => void;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
};

export const GoalTypeStep = ({
  onGoalTypeChange,
  onSubmit,
}: GoalTypeStepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
  });

  return (
    <div>
      <div className="space-y-3">
        <p className="uppercase text-gray-700 text-sm">About your goal</p>
        <h2 className="text-2xl font-bold">What is your goal?</h2>
        <p className="text-gray-700">
          This will inform us on how to best find your money
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="goalType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select your goal type</FormLabel>
                <Select
                  onValueChange={(value) => {
                    const selected = goalTypes.find(
                      (goalType) => goalType.id === value
                    );
                    if (selected) {
                      onGoalTypeChange(selected);
                    }
                    field.onChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a goal type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {goalTypes.map((goalType) => (
                      <SelectItem value={goalType.id} key={goalType.id}>
                        {goalType.icon} {goalType.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
