import type { Post } from "~/types";
import PostCard from "./PostCard";
import { Link } from "react-router";

type LatestPostsProps = {
  posts: Post[];
  limit?: number;
};

const LatestPost = ({ posts, limit = 3 }: LatestPostsProps) => {
  const sorted = [...posts].sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latest = sorted.slice(0, limit);

  return (
    <section className="max-w-6x mx-auto px-6 py-12">
      <h2 className="text-white font-bold mb-6 text-2xl">🆕 Latest Posts</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="block p-4 border border-gray-700 rounded-lg bg-gray-800 hover:shadow-md transition "
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-1">
              {post.title}
            </h3>

            <p className="text-sm text-gray-300 mb-2">{post.excerpt}</p>

            <div className="flex justify-between items-center text-gray-400">
              <span>{new Date(post.date).toDateString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPost;
