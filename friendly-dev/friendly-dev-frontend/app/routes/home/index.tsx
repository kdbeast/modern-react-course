import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type {
  Post,
  Project,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from "~/types";
import AboutPreview from "~/components/AboutPreview";
import LatestPost from "~/components/LatestPost";
import type { S } from "node_modules/framer-motion/dist/types.d-Cjd591yU";
import { body } from "framer-motion/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Friendly Dev" },
    { name: "description", content: "Custom Website Devlopment" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=${true}&populate=*`
    ),
    fetch(
      new URL(
        `${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`
      )
    ),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects = projectJson.data.map((project) => ({
    id: project.id,
    documentId: project.documentId,
    title: project.title,
    description: project.description,
    image: project.image?.url ? `${project.image.url}` : "/images/no-image.png",
    url: project.url,
    date: project.date,
    featured: project.featured,
    category: project.category,
  }));

  const posts = postJson.data.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    body: post.body,
    image: post.image?.url ? `${post.image.url}` : "/images/no-image.png",
    url: post.url,
    date: post.date,
  }));

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
