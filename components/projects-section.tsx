import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
