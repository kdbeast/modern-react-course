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

  const [
    projectsRes,
    // postRes
  ] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=${true}&populate=*`
    ),
    // fetch(new URL("/posts-meta.json", url)),
  ]);

  if (
    !projectsRes.ok
    //  || !postRes.ok
  ) {
    throw new Error("Failed to fetch data");
  }

  const [projectsJSON, posts] = await Promise.all([
    projectsRes.json(),
    // postRes.json(),
  ]);

  const projects = projectsJSON.data.map((project) => ({
    id: project.id,
    documentId: project.documentId,
    title: project.title,
    description: project.description,
    image: project.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${project.image.url}`
      : "/images/no-image.png",
    url: project.url,
    date: project.date,
    featured: project.featured,
    category: project.category,
  }));

  return { projects };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      {/* <LatestPost posts={posts} /> */}
    </>
  );
};

export default HomePage;
