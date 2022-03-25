import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ISSRMidwayContext } from 'ssr-types'

interface Params {
	router: RouteLocationNormalizedLoaded
}

export default async ({ router }: Params, ctx?: ISSRMidwayContext) => {}
