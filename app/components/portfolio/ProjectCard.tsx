import { ExternalLink, Github } from 'lucide-react'

import type { WebProject } from '~/data/portfolio'

import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export interface ProjectCardProps {
  project: WebProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
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
            <Button
              variant="primary"
              size="sm"
              href={project.liveUrl}
              external
              className="flex-1"
              ariaLabel={`View live demo of ${project.title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {project.repoUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.repoUrl}
              external
              className="flex-1"
              ariaLabel={`View source code for ${project.title}`}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
