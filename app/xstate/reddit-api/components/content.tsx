"use client";

import { useMachine } from "@xstate/react";
import { redditMachine } from "../machines/reddit";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Subreddit } from "./subreddit";

const subreddits = ["frontend", "reactjs", "vuejs"];

export const Content = () => {
  const [current, send] = useMachine(redditMachine);
  const { subreddit } = current.context;

  return (
    <div className="h-full w-full p-20">
      <div className="mb-4">
        <Select
          onValueChange={(value) => {
            send({ type: "SELECT", name: value });
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a subreddit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {subreddits.map((subreddit) => {
                return (
                  <SelectItem key={subreddit} value={subreddit}>
                    {subreddit}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {subreddit && <Subreddit name={subreddit} key={subreddit} />}
    </div>
  );
};
