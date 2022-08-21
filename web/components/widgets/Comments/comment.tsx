import { fromNowInDay } from '@/utils/time'
import { CommentModel } from '@mx-space/api-client'
import { defineComponent, PropType } from 'vue-demi'

const Comment = defineComponent({
	name: 'Comment',
	props: {
		comment: {
			type: Object as PropType<CommentModel>,
			required: true,
		},
	},
	setup() {},
	render() {
		return (
			<div>
				<div class='w-full flex gap-4 mb-8'>
					<div>
						<img class='rounded-xl w-12' src={'https://picsum.photos/100?' + Math.random()}></img>
					</div>
					<div class='flex-1 text-xs'>
						<div class=' text-red-400 dark:text-yellow-400'>{this.comment.author}</div>
						<div class='mt-1'>{this.comment.text}</div>
						<div class='text-right'>{fromNowInDay(this.comment.created)}</div>
					</div>
					{this.comment.children.map(v => (
						<Comment comment={v}></Comment>
					))}
				</div>
			</div>
		)
	},
})

export default Comment
