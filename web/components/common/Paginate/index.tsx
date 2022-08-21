import { Pager } from '@mx-space/api-client'
import { defineComponent, PropType } from 'vue-demi'

export default defineComponent({
	props: {
		pager: {
			type: Object as PropType<Pager>,
			required: true,
		},
	},
	setup() {},
	render() {
		return (
			<div class=' flex justify-center items-center mb-4'>
				{this.pager.hasPrevPage && (
					<i
						class='iconfont font-bold icon-arrow-left-bold mr-1'
						onClick={() => this.pager.currentPage--}
					></i>
				)}
				{this.pager.totalPage > 1 && (
					<span>
						{this.pager.currentPage} / {this.pager.totalPage}{' '}
					</span>
				)}
				{this.pager.hasNextPage && (
					<i
						class='iconfont font-bold icon-arrow-right-bold ml-1'
						onClick={() => this.pager.currentPage++}
					></i>
				)}
			</div>
		)
	},
})
