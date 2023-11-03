"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { createPlayerInputSchema, CreatePlayerInput } from "../schemas";
import { PlayerFields } from "./player-fields";

export const CreatePlayerForm = () => {
  const form = useForm<CreatePlayerInput>({
    resolver: zodResolver(createPlayerInputSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      number: 11,
    },
  });

  function onSubmit(values: CreatePlayerInput) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-3 flex-1">
          <PlayerFields control={form.control} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
