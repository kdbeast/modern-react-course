import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Friendly Dev" },
    { name: "description", content: "Custom Website Devlopment" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ project: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { project: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;
  console.log(project);

  return (
    <>
      <FeaturedProjects projects={project} count={2} />
      <AboutPreview />
    </>
  );
};

export default HomePage;
