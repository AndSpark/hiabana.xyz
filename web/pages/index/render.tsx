import { PostList } from '@/components/posts'
import { PaginateResult, PostModel } from '@mx-space/api-client'
import { defineComponent, inject, reactive, ref } from 'vue'

export default defineComponent({
	name: 'Home',
	setup(props, ctx) {
		const { posts } = reactive(inject<{ posts: PaginateResult<PostModel> }>('fetchData')!)

		return () => (
			<div class='px-4 pt-2 h-full overflow-auto'>
				<PostList postRes={posts}></PostList>
			</div>
		)
	}
})
