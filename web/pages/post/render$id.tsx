import { PostModel } from '@mx-space/api-client'
import { defineComponent, inject } from 'vue'

export default defineComponent({
	setup() {
		const post = inject<PostModel>('fetchData')!

		return () => <div></div>
	}
})
