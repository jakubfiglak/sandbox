import { createSubredditMachine } from "../machines/subreddit";
import { useMachine } from "@xstate/react";
import { useMemo } from "react";

type SubredditProps = {
  name: string;
};

export const Subreddit = ({ name }: SubredditProps) => {
  // Only create the machine based on the subreddit name once
  const subredditMachine = useMemo(() => {
    return createSubredditMachine(name);
  }, [name]);

  const [current, send] = useMachine(subredditMachine);

  if (current.matches("failure")) {
    return (
      <div>
        Failed to load posts.{" "}
        <button onClick={(_) => send("RETRY")}>Retry?</button>
      </div>
    );
  }

  const { subreddit, posts, lastUpdated } = current.context;

  return (
    <section
      data-machine={subredditMachine.id}
      data-state={current.toStrings().join(" ")}
    >
      {current.matches("loading") && <div>Loading posts...</div>}
      {posts && (
        <>
          <header className="mb-4">
            <h2 className="font-bold text-xl capitalize">{subreddit}</h2>
            <small>
              Last updated:{" "}
              {lastUpdated ? new Date(lastUpdated).toDateString() : ""}{" "}
              <button onClick={(_) => send("REFRESH")}>Refresh</button>
            </small>
          </header>
          <ul className="list-disc list-inside">
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        </>
      )}
    </section>
  );
};
