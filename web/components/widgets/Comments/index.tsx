import Paginate from '@/components/common/Paginate'
import { apiClient } from '@/utils/client'
import { message } from '@andspark/vue-message'
import { CommentModel, Pager, PaginateResult } from '@mx-space/api-client'
import { CommentDto } from '@mx-space/api-client/types/dtos/comment'
import { computed, defineComponent, PropType, reactive, ref, watch } from 'vue'
import Comment from './comment'
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
			<div class='relative w-full lg:flex-1'>
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
	props: {
		refId: {
			type: String,
			required: true,
		},
		comments: {
			type: Object,
			required: true,
		},
	},
	setup(props, ctx) {
		const commentForm = reactive(new CommentInputForm())
		const comments = ref(props.comments.data)
		const page = ref<Pager>(props.comments.pagination)
		const postComment = async () => {
			if (!commentForm.author || !commentForm.text || !commentForm.mail) {
				return message.error('请将信息填写完成哦')
			}
			try {
				await apiClient.comment.comment(props.refId, commentForm)
				message.success('送出成功！')
				await loadComments()
			} catch (error) {}
		}

		async function loadComments() {
			const res = await apiClient.comment.getByRefId(props.refId, { page: page.value.currentPage })
			comments.value = res.data
			commentForm.text = ''
			page.value = res.pagination
		}

		watch(
			() => page.value.currentPage,
			() => {
				loadComments()
			}
		)

		return () => (
			<div class='relative w-full border-t border-slate-400 pt-4'>
				<div class='w-full'>
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
						class='mt-4 w-full   h-20 border-slate-600 resize-none rounded  '
					/>
					<div class='w-full flex justify-end '>
						<button class='h-btn' onClick={postComment}>
							送出
						</button>
					</div>
					<div>
						{comments.value.map((v: CommentModel) => (
							<Comment comment={v}></Comment>
						))}
					</div>
					<Paginate pager={page.value}></Paginate>
				</div>
			</div>
		)
	},
})
