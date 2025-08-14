import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { PostMeta, Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";
import LatestPost from "~/components/LatestPost";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Friendly Dev" },
    { name: "description", content: "Custom Website Devlopment" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectsRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL("/posts-meta.json", url)),
  ]);

  if (!projectsRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [projects, posts] = await Promise.all([
    projectsRes.json(),
    postRes.json(),
  ]);

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPost posts={posts} />
    </>
  );
};

export default HomePage;
