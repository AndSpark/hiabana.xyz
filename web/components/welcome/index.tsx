import { defineComponent, inject } from 'vue'
import { Hitokoto } from '../layout/fetch'

export default defineComponent({
	setup(props, ctx) {
		const { hitokoto } = inject<{ hitokoto: Hitokoto }>('fetchData')!

		return () => (
			<div class='h-24 pt-2'>
				<p class='text-2xl'>
					欢迎来到 <strong>Hibana</strong> <span class='text-2xl'>😊</span>
				</p>
				<p class='pt-2 pl-2'>
					{hitokoto.hitokoto} ———— {hitokoto.creator}
				</p>
			</div>
		)
	}
})
