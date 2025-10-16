'use client'

import { Maximize2, X, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

import { cn } from '~/lib/utils'

interface UnityGamePlayerProps {
  game: {
    id: string
    title: string
    description: string
    tech: string[]
    unityBuildPath: string
  }
  onClose: () => void
}

/**
 * Unity Game Player Component using react-unity-webgl
 * Features:
 * - Native Unity WebGL integration
 * - Loading states and progress
 * - Fullscreen support
 * - Error handling
 * - Game controls and instructions
 */
export default function UnityGamePlayer({
  game,
  onClose,
}: UnityGamePlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Create Unity context with fallback for uncompressed files
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: `${game.unityBuildPath}/Build.loader.js`,
    dataUrl: `${game.unityBuildPath}/Build.data`,
    frameworkUrl: `${game.unityBuildPath}/Build.framework.js`,
    codeUrl: `${game.unityBuildPath}/Build.wasm`,
  })

  // Handle loading progress
  useEffect(() => {
    if (loadingProgression === 1) {
      setIsLoading(false)
      setError(null)
    } else {
      setLoadingProgress(Math.round(loadingProgression * 100))
    }
  }, [loadingProgression])

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

  // Handle fullscreen
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Restart game
  const handleRestart = () => {
    // Note: This would require the Unity game to expose a restart method
    // For now, we'll just reload the page
    window.location.reload()
  }

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={cn(
          'shadow-elevated animate-scale-in overflow-hidden rounded-2xl bg-slate-900',
          isFullscreen ? 'fixed inset-0 rounded-none' : 'w-full max-w-7xl',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {!isFullscreen && (
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 p-4">
            <div>
              <h3 className="text-xl font-bold text-white">{game.title}</h3>
              <p className="text-sm text-slate-400">{game.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRestart}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Restart Game"
              >
                <RotateCcw size={20} />
              </button>
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
        )}

        {/* Game container */}
        <div
          className="relative bg-black"
          style={{ aspectRatio: isFullscreen ? 'auto' : '16/9' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-purple-600 border-t-transparent" />
                <p className="mb-2 text-lg text-white">
                  Loading {game.title}...
                </p>
                <div className="w-64 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {loadingProgress}%
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
                  <X size={32} className="text-white" />
                </div>
                <p className="mb-4 text-lg text-white">Failed to load game</p>
                <p className="mb-4 text-sm text-slate-400">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
                >
                  Reload Page
                </button>
              </div>
            </div>
          )}

          {!error && (
            <Unity
              unityProvider={unityProvider}
              style={{
                width: '100%',
                height: '100%',
                display: isLoading ? 'none' : 'block',
              }}
            />
          )}
        </div>

        {/* Footer with controls and info */}
        {!isFullscreen && (
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

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>Press ESC to close</span>
                <span>•</span>
                <span>Click outside to close</span>
              </div>
            </div>

            {/* Game Instructions */}
            <div className="mt-4 rounded-lg bg-slate-700 p-3">
              <h4 className="mb-2 text-sm font-semibold text-white">
                How to Play:
              </h4>
              <div className="text-xs text-slate-300">
                <p>• Use WASD or Arrow Keys to move</p>
                <p>• Use Space or Left Click to interact with objects</p>
                <p>• Complete orders as fast as possible</p>
                <p>• Work together in multiplayer mode</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Instructions for fullscreen */}
      {isFullscreen && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/70 px-4 py-2 text-sm text-white backdrop-blur-sm">
          Press ESC to exit fullscreen
        </div>
      )}
    </div>
  )
}
