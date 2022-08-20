import { API_URL } from '../constants/env'
import { allControllers, createClient } from '@mx-space/api-client/'
import { axiosAdaptor } from '@mx-space/api-client/lib/adaptors/axios'
import { AxiosError } from 'axios'
import { message } from '@andspark/vue-message'
import { getToken } from './cookie'

export const apiClient = createClient(axiosAdaptor)(API_URL, {
	controllers: allControllers,
})

export const $axios = axiosAdaptor.default

if (!__isBrowser__) {
	// 防止服务端返回爬虫是禁止的
	$axios.defaults.headers['User-Agent'] = 'mx-space'
}

$axios.defaults.timeout = 10000

$axios.interceptors.request.use(config => {
	const token = getToken()
	if (token && config.headers) {
		config.headers['Authorization'] = token
	}

	return config
})

$axios.interceptors.response.use(
	undefined,
	(error: AxiosError<Record<string, any> | undefined>) => {
		if (process.env.NODE_ENV === 'development') {
			console.error(error.message)
		}

		if (!error.response || error.response.status === 408 || error.code === 'ECONNABORTED') {
			if (__isBrowser__) {
				message.error('请求超时, 请检查一下网络哦!')
			} else {
				const msg = '上游服务器请求超时'
				message.error(msg)
				console.error(msg, error.message)
			}
		}

		const response = error.response
		if (response) {
			const data = response.data

			// eslint-disable-next-line no-empty
			if (response.status == 401) {
			} else if (data && data.message) {
				message.error(
					typeof data.message == 'string'
						? data.message
						: Array.isArray(data.message)
						? data.message[0]
						: '请求错误'
				)
			}
		}

		return Promise.reject(error)
	}
)
