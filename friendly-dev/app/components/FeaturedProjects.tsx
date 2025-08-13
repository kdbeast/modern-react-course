import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, count);

  return (
    <section>
      <h2 className="text-white font-bold mb-6 text-2xl">Featured Projects 🌟</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
