import { message } from '@andspark/vue-message'
import { useRoute } from 'vue-router'

export function checkRoute() {
	const route = useRoute()
	if (route.path.match(/^\/error/)) {
		message.error('出错辣！')
	} else {
		message.success('欢迎来到Hibana～')
	}
}
