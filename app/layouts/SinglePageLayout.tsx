import { Outlet } from 'react-router'

import { Footer } from '~/components/portfolio/Footer'
import { SinglePageNavigation } from '~/components/portfolio/SinglePageNavigation'
import { SkipLink } from '~/components/portfolio/SkipLink'

export default function SinglePageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <SinglePageNavigation />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
