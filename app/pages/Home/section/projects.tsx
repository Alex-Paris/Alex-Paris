import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { type WebProject, webProjects } from '~/data/portfolio'
import { useLazyImage } from '~/hooks/useLazyImage'
import { cn } from '~/lib/cn'

interface ProjectCardProps {
  project: WebProject
  onViewDetails: (project: WebProject) => void
}

/**
 * Individual project card with lazy-loaded image
 */
function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { imgRef, isLoaded, setIsLoaded, isInView } = useLazyImage()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="shadow-soft hover:shadow-elevated group transform overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2 dark:bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image */}
      <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-700">
        <img
          ref={imgRef}
          src={isInView ? project.imageUrl : undefined}
          alt={project.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-700 group-hover:scale-110',
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
        )}

        {/* Overlay with tech tags */}
        <div
          className={cn(
            'absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs font-bold text-white">
            Featured
          </div>
        )}
      </div>

      {/* Project info */}
      <div className="p-6">
        <h3 className="mb-2 line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
          >
            View Details
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              aria-label="View source code"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Projects section with filtering and lazy loading
 * Features:
 * - Filter projects by technology
 * - Lazy-loaded images
 * - Animated card entrance
 * - Featured/All toggle
 * - Project detail modal
 */
export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<WebProject | null>(
    null,
  )
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Get all unique technologies
  const allTech = Array.from(new Set(webProjects.flatMap((p) => p.tech))).sort()

  // Filter projects
  const filteredProjects = webProjects.filter((project) => {
    if (filter === 'featured' && !project.featured) return false
    if (selectedTech && !project.tech.includes(selectedTech)) return false
    return true
  })

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div
          className={cn(
            'mb-12 text-center transition-all duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Web Projects
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A showcase of web applications I&#39;ve built using modern
            technologies and best practices
          </p>
        </div>

        {/* Filters */}
        <div
          className={cn(
            'mb-8 transition-all delay-100 duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          {/* Featured/All toggle */}
          <div className="mb-6 flex justify-center">
            <div className="shadow-soft inline-flex rounded-lg bg-white p-1 dark:bg-slate-700">
              <button
                onClick={() => setFilter('all')}
                className={cn(
                  'rounded-md px-6 py-2 font-medium transition-all duration-30',
                  filter === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                )}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={cn(
                  'rounded-md px-6 py-2 font-medium transition-all duration-300',
                  filter === 'featured'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                )}
              >
                Featured
              </button>
            </div>
          </div>

          {/* Tech filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={cn(
                'rounded-lg px-4 py-2 font-medium transition-all duration-300',
                selectedTech === null
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600',
              )}
            >
              All Tech
            </button>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() =>
                  setSelectedTech(tech === selectedTech ? null : tech)
                }
                className={cn(
                  'rounded-lg px-4 py-2 font-medium transition-all duration-300',
                  selectedTech === tech
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600',
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  'transition-all duration-700',
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No projects match the selected filters.
            </p>
          </div>
        )}
      </div>

      {/* Project detail modal - will be imported separately */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

/**
 * Temporary inline modal - will be replaced with separate component
 */
function ProjectDetailModal({
  project,
  onClose,
}: {
  project: WebProject
  onClose: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="animate-scale-in shadow-elevated max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white dark:bg-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 transition-colors hover:bg-white dark:bg-slate-900/90 dark:hover:bg-slate-900"
            aria-label="Close modal"
          >
            <ChevronDown size={24} className="rotate-45 transform" />
          </button>
        </div>

        <div className="p-8">
          <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            {project.longDescription || project.description}
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-slate-500 uppercase dark:text-slate-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-purple-100 px-4 py-2 font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
              >
                <Github size={20} />
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
