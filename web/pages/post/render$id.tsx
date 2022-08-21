import { setSubtitle } from '@/components/layout/Header'
import Comments from '@/components/widgets/Comments'
import { usePostProgress } from '@/utils/progress'
import { parseDate } from '@/utils/time'
import { PostModel } from '@mx-space/api-client'
import { defineComponent, inject, onMounted, onUnmounted } from 'vue'
import { commentsData } from './fetch'
import '/public/md.css'
export default defineComponent({
	setup() {
		const { post } = inject<{ post: PostModel }>('fetchData')!
		const comments = commentsData()

		usePostProgress('#topBar', '#post')
		if (__isBrowser__) {
			const observer = new IntersectionObserver(entries => {
				if (entries[0].intersectionRatio <= 0) {
					setSubtitle(post.title)
				} else {
					setSubtitle(post.title, false)
				}
			})
			onMounted(() => {
				observer.observe(document.getElementById('postTilte')!)
			})

			onUnmounted(() => {
				observer.disconnect()
				setSubtitle(post.title, false)
			})
		}

		return () => (
			<div class='pt-8' id='post'>
				<h2 class='px-8 text-3xl' id='postTilte'>
					{post.title}
				</h2>
				<p class='px-8 mt-4 mb-2 text-sm '>
					{parseDate(post.created, 'YYYY-MM-DD dddd') + ' ' + parseDate(post.created, 'HH:mm')}
				</p>
				<v-md-preview text={post.text}></v-md-preview>
				<div class='mx-8 mt-4'>
					<Comments comments={comments!} refId={post.id}></Comments>
				</div>
			</div>
		)
	},
})
