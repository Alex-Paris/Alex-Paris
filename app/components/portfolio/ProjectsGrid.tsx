import type { WebProject } from '~/data/portfolio'

import { ProjectCard } from './ProjectCard'

export interface ProjectsGridProps {
  projects: WebProject[]
  showFeaturedOnly?: boolean
}

export function ProjectsGrid({
  projects,
  showFeaturedOnly = false,
}: ProjectsGridProps) {
  const filteredProjects = showFeaturedOnly
    ? projects.filter((p) => p.featured)
    : projects

  if (filteredProjects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          No projects to display yet.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
