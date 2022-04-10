import { parseDate } from '@/utils/time'
import { PostModel } from '@mx-space/api-client'
import { defineComponent, inject } from 'vue'
import '/public/md.css'
export default defineComponent({
	setup() {
		const { post } = inject<{ post: PostModel }>('fetchData')!
		return () => (
			<div class='pt-8'>
				<h2 class='px-8 text-3xl'>{post.title}</h2>
				<p class='px-8 mt-4 mb-2 text-sm '>
					{parseDate(post.created, 'YYYY-MM-DD dddd') + ' ' + parseDate(post.created, 'HH:mm')}
				</p>
				<v-md-preview text={post.text}></v-md-preview>
			</div>
		)
	}
})
