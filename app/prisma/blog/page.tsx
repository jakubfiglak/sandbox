import { getPostsList } from "@/lib/db/posts";
import { ArticleCard } from "./components/article-card";

const BlogPage = async () => {
  const posts = await getPostsList();

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      <header className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-gray-600">
          Stay updated with our latest news and articles
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <ArticleCard key={post.id} {...post} />
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
