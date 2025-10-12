import type { UnityGame } from '~/data/portfolio'

import { UnityCard } from './unity-card'

export interface UnityGridProps {
  games: UnityGame[]
  showFeaturedOnly?: boolean
}

export function UnityGrid({ games, showFeaturedOnly = false }: UnityGridProps) {
  const filteredGames = showFeaturedOnly
    ? games.filter((g) => g.featured)
    : games

  if (filteredGames.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          No games to display yet.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredGames.map((game) => (
        <UnityCard key={game.id} game={game} />
      ))}
    </div>
  )
}
