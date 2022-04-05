import { PostModel } from '@mx-space/api-client'
import { defineComponent, inject } from 'vue'
import '/public/md.css'
export default defineComponent({
	setup() {
		const post = inject<PostModel>('fetchData')!
		return () => (
			<div>
				<v-md-preview text={post.text}></v-md-preview>
			</div>
		)
	}
})
