import { Play, Maximize2, ExternalLink, Github, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { type UnityGame, unityGames } from '~/data/portfolio'
import { useLazyImage } from '~/hooks/useLazyImage'
import { cn } from '~/lib/cn'

interface GameCardProps {
  game: UnityGame
  onPlay: (game: UnityGame) => void
}

/**
 * Individual Unity game card
 */
function GameCard({ game, onPlay }: GameCardProps) {
  const { imgRef, isLoaded, setIsLoaded, isInView } = useLazyImage()
  const [isHovered, setIsHovered] = useState(false)

  const hasPlayableVersion = game.unityBuildPath || game.liveUrl

  return (
    <div
      className="shadow-soft hover:shadow-elevated group overflow-hidden rounded-2xl bg-white transition-all duration-500 dark:bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Game screenshot/thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-700">
        <img
          ref={imgRef}
          src={isInView ? game.imageUrl : undefined}
          alt={game.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
        )}

        {/* Play button overlay */}
        {hasPlayableVersion && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <button
              onClick={() => onPlay(game)}
              className="shadow-elevated flex h-20 w-20 transform items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:scale-110"
              aria-label={`Play ${game.title}`}
            >
              <Play size={32} fill="currentColor" />
            </button>
          </div>
        )}

        {/* Featured badge */}
        {game.featured && (
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs font-bold text-white">
            Featured
          </div>
        )}

        {/* Platform badge */}
        <div className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {game.unityBuildPath ? 'WebGL' : 'External'}
        </div>
      </div>

      {/* Game info */}
      <div className="p-6">
        <h3 className="mb-2 line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
          {game.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-slate-600 dark:text-slate-400">
          {game.description}
        </p>

        {/* Tech stack chips */}
        <div className="mb-4 flex flex-wrap gap-2">
          {game.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {game.tech.length > 3 && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-300">
              +{game.tech.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {hasPlayableVersion ? (
            <button
              onClick={() => onPlay(game)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
            >
              <Play size={16} />
              Play Game
            </button>
          ) : (
            game.liveUrl && (
              <a
                href={game.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
              >
                <ExternalLink size={16} />
                View Game
              </a>
            )
          )}

          {game.repoUrl && (
            <a
              href={game.repoUrl}
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
 * Unity game player modal with fullscreen support
 */
function UnityPlayerModal({
  game,
  onClose,
}: {
  game: UnityGame
  onClose: () => void
}) {
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const gameUrl = game.unityBuildPath || game.liveUrl || ''

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="shadow-elevated animate-scale-in w-full max-w-7xl overflow-hidden rounded-2xl bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 p-4">
          <div>
            <h3 className="text-xl font-bold text-white">{game.title}</h3>
            <p className="text-sm text-slate-400">{game.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFullscreen}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
              aria-label="Fullscreen"
            >
              <Maximize2 size={20} />
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Game container */}
        <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-purple-600 border-t-transparent" />
                <p className="text-lg text-white">Loading game...</p>
              </div>
            </div>
          )}

          <iframe
            ref={iframeRef}
            src={gameUrl}
            title={game.title}
            className="h-full w-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Footer with info */}
        <div className="border-t border-slate-700 bg-slate-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {game.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {game.liveUrl && !game.unityBuildPath && (
                <a
                  href={game.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-700"
                >
                  <ExternalLink size={16} />
                  Open Externally
                </a>
              )}

              {game.repoUrl && (
                <a
                  href={game.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-600"
                >
                  <Github size={16} />
                  Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <p className="mt-4 text-sm text-slate-400">
        Press ESC or click outside to close
      </p>
    </div>
  )
}

/**
 * Unity Games section with WebGL embed support
 * Features:
 * - Lazy-loaded game thumbnails
 * - Fullscreen game player modal
 * - WebGL and external link support
 * - Featured games
 */
export default function UnityGames() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedGame, setSelectedGame] = useState<UnityGame | null>(null)
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

  return (
    <>
      <section
        id="games"
        ref={sectionRef}
        className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Animated background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="animate-float absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500 mix-blend-multiply blur-3xl filter" />
          <div className="animate-float animation-delay-300 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500 mix-blend-multiply blur-3xl filter" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div
            className={cn(
              'mb-12 text-center transition-all duration-700',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            )}
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Unity Games
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Interactive games and experiences built with Unity, featuring
              WebGL builds and 3D gameplay
            </p>
          </div>

          {/* Games grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {unityGames.map((game, index) => (
              <div
                key={game.id}
                className={cn(
                  'transition-all duration-700',
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <GameCard game={game} onPlay={setSelectedGame} />
              </div>
            ))}
          </div>

          {unityGames.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-slate-300">
                No games available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Unity player modal */}
      {selectedGame && (
        <UnityPlayerModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </>
  )
}
