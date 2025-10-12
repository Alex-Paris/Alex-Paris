import { ExternalLink, Github } from 'lucide-react'

import { Link } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import type { WebProject } from '~/data/portfolio'

export interface ProjectCardProps {
  project: WebProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover="on" className="flex h-full flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={project.imageUrl}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {project.featured && (
          <span className="absolute top-3 right-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3 pt-4">
          {project.liveUrl && (
            <Link
              variant="primary"
              size="sm"
              href={project.liveUrl}
              isExternal
              className="flex-1"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          )}
          {project.repoUrl && (
            <Link
              variant="outline"
              size="sm"
              href={project.repoUrl}
              isExternal
              className="flex-1"
              aria-label={`View source code for ${project.title}`}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
