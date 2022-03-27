import { PaginateResult, PostModel } from '@mx-space/api-client'
import { defineComponent, inject, reactive, ref } from 'vue'

export default defineComponent({
	props: ['fetchData', 'asyncData'],
	setup(props, ctx) {
		const postRes = inject<PaginateResult<PostModel>>('fetchData')
		const posts = ref(postRes?.data)

		return () => (
			<div class='p-4 h-full overflow-auto'>
				{/* <iframe
					src='https://cv.hibana.xyz/'
					class='mx-auto w-4/5 h-full opacity-80 dark:opacity-50 rounded-lg'
				></iframe> */}
				{posts.value?.map(post => (
					<div class='flex w-full mb-8 p-6 shadow-lg border-slate-300 dark:border-slate-800 border rounded-lg duration-500'>
						<div class='w-80'>
							<img src={post.images?.[0]?.src}></img>
						</div>
						<div class='ml-4'>
							<h2>{post.title}</h2>
							<time class='text-xs text-gray-400 my-1'>{post.created}</time>
							<p class='text-sm'>{post.summary}</p>
						</div>
					</div>
				))}
			</div>
		)
	}
})
