import { type RouteConfig, layout, index } from '@react-router/dev/routes'

export default [
  layout('layouts/SinglePageLayout.tsx', [index('pages/Home/index.tsx')]),
] satisfies RouteConfig
