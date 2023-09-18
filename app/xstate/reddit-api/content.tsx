"use client";

import { useMachine } from "@xstate/react";
import { redditMachine } from "./machine";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const subreddits = ["frontend", "reactjs", "vuejs"];

export const Content = () => {
  const [current, send] = useMachine(redditMachine);
  const { subreddit, posts } = current.context;

  return (
    <div>
      <div>
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
      <section>
        <h1>{current.matches("idle") ? "Select a subreddit" : subreddit}</h1>
        {current.matches({ selected: "loading" }) && <div>Loading...</div>}
        {current.matches({ selected: "loaded" }) && (
          <ul>
            {posts.map((post) => (
              <li key={post.title}>{post.title}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
