import type { PostMeta } from "~/types";
import type { Route } from "./+types";
import PostCard from "~/components/PostCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();

  data.sort(
    (a: PostMeta, b: PostMeta) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return { posts: data };
}

const BlogsPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const totalPages = Math.ceil(posts.length / postPerPage);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-white font-bold mb-6 text-3xl">📝 Blog Page</h2>
      {currentPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default BlogsPage;
