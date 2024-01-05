import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

const BlogPostPage = () => {
  return (
    <main className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="grid gap-4 lg:grid-cols-[500px_1fr]">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              The Story of AI
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on December 28, 2023
            </p>
          </div>
          <div className="[&>p:first-child]:mt-0">
            <p>
              Artificial Intelligence (AI) is a fascinating concept that has
              captivated the minds of many. It refers to the simulation of human
              intelligence in machines that are programmed to think like humans
              and mimic their actions.
            </p>
            <p>
              The term may also be applied to any machine that exhibits traits
              associated with a human mind such as learning and problem-solving.
              The ideal characteristic of artificial intelligence is its ability
              to rationalize and take actions that have the best chance of
              achieving a specific goal.
            </p>
          </div>
        </div>
      </article>
      <section className="mt-12">
        <h2 className="text-3xl font-bold">Comments</h2>
        <div className="grid w-full gap-1.5 mt-4">
          <Label htmlFor="comment">Add Comment</Label>
          <Textarea id="comment" placeholder="Type your comment here." />
          <Button className="self-end">Submit</Button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your comment will be visible to everyone.
          </p>
        </div>
        <div className="space-y-4 mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Avatar
                  alt="User avatar"
                  src="/placeholder.svg?height=40&width=40"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dec 28, 2023
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I found this article to be incredibly insightful. I have always
                been interested in AI and this post has definitely deepened my
                understanding.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Avatar
                  alt="User avatar"
                  src="/placeholder.svg?height=40&width=40"
                />
                <div>
                  <h3 className="text-lg font-semibold">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dec 27, 2023
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Great article! I'm looking forward to reading more about this
                topic.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
