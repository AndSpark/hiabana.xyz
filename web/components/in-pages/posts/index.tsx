import { PaginateResult, PostModel } from '@mx-space/api-client'
import { parseDate } from '@/utils/time'
import { useSlots, VNode } from 'vue'
export const PostListItem = (props: { post: PostModel }) => {
	const { post } = props
	return (
		<div class='block w-full mb-8  shadow-lg overflow-hidden bg-slate-300 bg-opacity-60 dark:bg-slate-700 dark:bg-opacity-30 border-slate-300 dark:border-slate-800 border rounded-lg duration-500'>
			<div class='w-full max-h-48 overflow-hidden relative'>
				<img src={post.images?.[0]?.src}></img>
			</div>
			<div class='p-6'>
				<router-link to={`/post/${post.id}`} class='text-xl sm:text-2xl'>
					{post.title}
				</router-link>
				<div class='text-xs text-gray-500 dark:text-gray-400  my-4 flex w-full flex-nowrap'>
					<p>
						{parseDate(post.created, 'YYYY-MM-DD dddd') + ' ' + parseDate(post.created, 'HH:mm')}
					</p>
					<div class='flex-1'></div>
				</div>
				<p class='text-sm'>{post.summary}</p>
				<div class='mt-2'>
					{post.tags.map(v => (
						<span class='p-1 mx-1 '>{'#' + v}</span>
					))}
				</div>
			</div>
		</div>
	)
}

export const PostList = (props: { postRes: PaginateResult<PostModel> }) => {
	const { postRes } = props
	const posts = postRes.data

	return (
		<div class='px-4 h-full overflow-auto'>
			{useSlots().default?.()}
			{posts.map(post => (
				<PostListItem post={post} />
			))}
			<div class='flex w-full justify-center'>
				{postRes.pagination.hasNextPage && (
					<router-link to={`/post?page=${postRes.pagination.currentPage + 1}&size=1`}>
						下一页
					</router-link>
				)}
				{postRes.pagination.hasPrevPage && (
					<router-link to={`/post?page=${postRes.pagination.currentPage - 1}`}>上一页</router-link>
				)}
			</div>
		</div>
	)
}

PostList.props = ['postRes']
