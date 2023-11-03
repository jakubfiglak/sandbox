import { assign, createMachine } from "xstate";

type SubredditContext = {
  subreddit: string;
  posts: any[] | null;
  lastUpdated: number | null;
};

type SubredditEvent = { type: "REFRESH" } | { type: "RETRY" };

type SubredditState =
  | { value: "loading"; context: SubredditContext }
  | { value: "loaded"; context: SubredditContext }
  | { value: "failure"; context: SubredditContext };

async function fetchSubreddit(subreddit: string) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => response.json())
    .then((json) => json.data.children.map((child: any) => child.data));
}

export const createSubredditMachine = (subreddit: string) => {
  return createMachine<SubredditContext, SubredditEvent, SubredditState>({
    id: "subreddit",
    initial: "loading",
    context: {
      subreddit, // subreddit name passed in
      posts: null,
      lastUpdated: null,
    },
    states: {
      loading: {
        invoke: {
          id: "fetch-subreddit",
          src: (ctx) => fetchSubreddit(ctx.subreddit),
          onDone: {
            target: "loaded",
            actions: assign({
              posts: (_, event) => event.data,
              lastUpdated: () => Date.now(),
            }),
          },
          onError: "failure",
        },
      },
      loaded: {
        on: {
          REFRESH: "loading",
        },
      },
      failure: {
        on: {
          RETRY: "loading",
        },
      },
    },
  });
};
