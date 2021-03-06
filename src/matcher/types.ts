import {
  RouteRecordMultipleViews,
  NavigationGuard,
  RouteRecordCommon,
} from '../types'

// normalize component/components into components and make every property always present
export interface RouteRecordNormalized {
  path: RouteRecordMultipleViews['path']
  name: RouteRecordMultipleViews['name']
  components: RouteRecordMultipleViews['components']
  children: Exclude<RouteRecordMultipleViews['children'], void>
  meta: Exclude<RouteRecordMultipleViews['meta'], void>
  props: Exclude<RouteRecordCommon['props'], void>
  beforeEnter: RouteRecordMultipleViews['beforeEnter']
  leaveGuards: NavigationGuard[]
  aliasOf: RouteRecordNormalized | undefined
}
