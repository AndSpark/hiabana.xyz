import { defineComponent } from 'vue'
import { pageData } from './fetch'
import Comments from '@/components/widgets/Comments'

export default defineComponent({
	setup(props, ctx) {
		const page = pageData()!
		return () => (
			<div class='pt-8 px-4'>
				<div class='whitespace-pre-wrap'>{page.text}</div>
				{page.allowComment && <Comments refId={page.id}></Comments>}
			</div>
		)
	},
})
