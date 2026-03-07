"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { ExternalLinkIcon } from "./icons";
import { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-5"
      onClick={() => track("project_click", { name: project.name, url: project.url })}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={project.logo}
            alt={project.name}
            width={40}
            height={40}
            className="rounded-lg"
          />
          <h3 className="font-semibold text-zinc-900">{project.name}</h3>
        </div>
        <ExternalLinkIcon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-600" />
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>
    </a>
  );
}
