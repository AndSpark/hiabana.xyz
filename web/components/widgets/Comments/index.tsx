import { apiClient } from '@/utils/client'
import { message } from '@andspark/vue-message'
import { CommentDto } from '@mx-space/api-client/types/dtos/comment'
import { computed, defineComponent, reactive } from 'vue'
class CommentInputForm implements CommentDto {
	author: string

	mail: string

	url?: string

	text: string
}

const CommentBaseInput = defineComponent({
	name: 'CommentBaseInput',
	props: ['modelValue', 'label', 'icon'],
	setup(props, ctx) {
		const value = computed({
			get() {
				return props.modelValue
			},
			set(val) {
				ctx.emit('update:modelValue', val)
			},
		})
		return () => (
			<div class='relative w-full xl:w-52'>
				<input
					class='w-full placeholder:indent-8 placeholder:text-xs text-xs h-8 rounded indent-8'
					placeholder={props.label}
					v-model={value.value}
				/>
				<i class={props.icon + ' iconfont absolute z-50 left-2 top-1'}></i>
			</div>
		)
	},
})
export default defineComponent({
	name: 'Comments',
	props: ['refId'],
	setup(props, ctx) {
		const commentForm = reactive(new CommentInputForm())

		const postComment = async () => {
			if (!commentForm.author || !commentForm.text || !commentForm.mail) {
				return message.error('请将信息填写完成哦')
			}
			try {
				await apiClient.comment.comment(props.refId, commentForm)
				message.success('送出成功！')
			} catch (error) {}
		}

		return () => (
			<div class='relative'>
				<div class='w-fit '>
					<p class='mb-1'>路过的小伙伴,留言在这里！</p>
					<div class='flex flex-wrap  w-full gap-4'>
						<CommentBaseInput
							icon='icon-user'
							label='昵称*'
							v-model={commentForm.author}
						></CommentBaseInput>
						<CommentBaseInput
							icon='icon-email'
							label='邮箱*'
							v-model={commentForm.mail}
						></CommentBaseInput>
						<CommentBaseInput
							icon='icon-URLScheme'
							label='网址?'
							v-model={commentForm.url}
						></CommentBaseInput>
					</div>
					<textarea
						v-model={commentForm.text}
						placeholder='文明留言哦'
						class='mt-4 w-full max-w-[170rem] h-40 border-slate-600 resize-none rounded  '
					/>
					<div class='w-full flex justify-end '>
						<button class='h-btn' onClick={postComment}>
							送出
						</button>
					</div>
				</div>
			</div>
		)
	},
})
