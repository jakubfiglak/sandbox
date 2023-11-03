import { assign, createMachine } from "xstate";

type RedditContext = {
  subreddit: string | null;
};

type RedditEvent = { type: "SELECT"; name: string };

type RedditState =
  | {
      value: "idle";
      context: RedditContext;
    }
  | { value: "selected"; context: RedditContext };

export const redditMachine = createMachine<
  RedditContext,
  RedditEvent,
  RedditState
>({
  id: "reddit",
  initial: "idle",
  context: {
    subreddit: null,
  },
  states: {
    idle: {},
    selected: {}, // no invocations!
  },
  on: {
    SELECT: {
      target: ".selected",
      actions: assign({
        subreddit: (_, event) => event.name,
      }),
    },
  },
});
