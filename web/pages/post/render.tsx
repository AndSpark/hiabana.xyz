import { PostList } from '@/components/posts'
import { PaginateResult, PostModel } from '@mx-space/api-client'
import { defineComponent, inject, reactive, ref } from 'vue'

export default defineComponent({
	name: 'post',
	setup(props, ctx) {
		const postRes = reactive(inject<PaginateResult<PostModel>>('fetchData')!)

		return () => (
			<div class='px-4 h-full overflow-auto'>
				<PostList postRes={postRes}></PostList>
			</div>
		)
	}
})
