import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ISSRNestContext } from 'ssr-types'
import { apiClient } from '@/utils/client'
interface Params {
	router: RouteLocationNormalizedLoaded
}

export default async ({ router }: Params, ctx?: ISSRNestContext) => {
	// 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83

	const data = await apiClient.post.getLatest()
	return data
}
