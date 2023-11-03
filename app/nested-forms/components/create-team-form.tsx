"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { createTeamInputSchema, type CreateTeamInput } from "../schemas";
import { PlayerFields } from "./player-fields";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  PlusCircleIcon,
  Trash2Icon,
} from "lucide-react";

export const CreateTeamForm = () => {
  const form = useForm<CreateTeamInput>({
    resolver: zodResolver(createTeamInputSchema as any),
    defaultValues: {
      name: "",
      players: [{ firstName: "", lastName: "", number: 11 }],
    },
  });

  const playersFieldArray = useFieldArray({
    control: form.control,
    name: "players",
  });

  function onSubmit(values: CreateTeamInput) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="AFC Richmond" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="space-y-4">
          <h3 className="font-bold text-lg">Players</h3>
          {playersFieldArray.fields.map((field, index) => (
            <div
              key={field.id}
              className="flex items-end justify-between gap-4"
            >
              <div className="grid gap-4 md:grid-cols-3 flex-1">
                <PlayerFields control={form.control} index={index} />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => playersFieldArray.move(index, index - 1)}
                  disabled={index === 0}
                >
                  <span className="sr-only">Move up</span>
                  <ArrowUpCircleIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => playersFieldArray.move(index, index + 1)}
                  disabled={index === playersFieldArray.fields.length - 1}
                >
                  <span className="sr-only">Move down</span>
                  <ArrowDownCircleIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => playersFieldArray.remove(index)}
                >
                  <span className="sr-only">Delete</span>
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              playersFieldArray.append({
                firstName: "",
                lastName: "",
                number: 11,
              })
            }
          >
            <PlusCircleIcon className="h-4 w-4 mr-2" />
            Add Player
          </Button>
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
