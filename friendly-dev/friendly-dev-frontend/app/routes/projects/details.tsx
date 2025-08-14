import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import { FaArrowLeft } from "react-icons/fa";

export async function loader({ request, params }: Route.LoaderArgs) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${params.id}&populate=* `
  );

  if (!res.ok) {
    throw new Error("Project not found");
  }

  const json: StrapiResponse<StrapiProject> = await res.json();

  const project: Project = {
    id: json.data[0].id,
    documentId: json.data[0].documentId,
    title: json.data[0].title,
    description: json.data[0].description,
    image: json.data[0].image?.url
      ? `${json.data[0].image.url}`
      : "/images/no-image.png",
    url: json.data[0].url,
    date: json.data[0].date,
    featured: json.data[0].featured,
    category: json.data[0].category,
  };

  return { project };
}

const ProjectsDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 transition mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Projects Page
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} * {project.category}
          </p>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            View Live Site ➡️
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailsPage;
