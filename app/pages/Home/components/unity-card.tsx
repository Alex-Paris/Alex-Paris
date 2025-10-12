import { Github, Play, X } from 'lucide-react'
import { useState } from 'react'

import { Button, Link } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import type { UnityGame } from '~/data/portfolio'

export interface UnityCardProps {
  game: UnityGame
}

export function UnityCard({ game }: UnityCardProps) {
  const [showModal, setShowModal] = useState(false)

  const handlePlay = () => {
    if (game.unityBuildPath) {
      // If locally hosted, show in modal
      setShowModal(true)
    } else if (game.liveUrl) {
      // If external link, open in new tab
      window.open(game.liveUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <Card hover="on" className="flex h-full flex-col">
        {/* Game Thumbnail */}
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src={game.imageUrl}
            alt={`${game.title} screenshot`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {game.featured && (
            <span className="absolute top-3 right-3 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          )}

          {/* Play Overlay */}
          {(game.unityBuildPath || game.liveUrl) && (
            <button
              onClick={handlePlay}
              className="group absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 hover:opacity-100"
              aria-label={`Play ${game.title}`}
            >
              <div className="transform rounded-full bg-white p-4 transition-transform duration-200 group-hover:scale-110 dark:bg-gray-900">
                <Play className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </button>
          )}
        </div>

        {/* Game Content */}
        <div className="flex flex-1 flex-col space-y-4 p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {game.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {game.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {game.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 dark:bg-purple-950 dark:text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex gap-3 pt-4">
            {(game.unityBuildPath || game.liveUrl) && (
              <Button
                variant="primary"
                size="sm"
                onClick={handlePlay}
                className="flex-1 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                aria-label={`Play ${game.title}`}
              >
                <Play className="mr-2 h-4 w-4" />
                Play Game
              </Button>
            )}
            {game.repoUrl && (
              <Link
                variant="outline"
                size="sm"
                href={game.repoUrl}
                isExternal
                className="flex-1"
                aria-label={`View source code for ${game.title}`}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            )}
          </div>
        </div>
      </Card>

      {/* Unity WebGL Modal */}
      {showModal && game.unityBuildPath && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-xl bg-white dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Buttonaaaaaa */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-red-600 p-2 text-white transition-colors duration-200 hover:bg-red-700"
              aria-label="Close game"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Game Title */}
            <div className="border-b border-gray-200 bg-gray-100 px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {game.title}
              </h2>
            </div>

            {/* Unity WebGL iframe */}
            <div className="aspect-video bg-black">
              <iframe
                src={game.unityBuildPath}
                title={game.title}
                className="h-full w-full"
                allowFullScreen
              />
            </div>

            {/* Instructions */}
            <div className="border-t border-gray-200 bg-gray-100 px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Note:</strong> Make sure to click on the game to enable
                keyboard/mouse controls. Press ESC or click the close button to
                exit.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
