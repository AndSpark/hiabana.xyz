import { defineComponent } from 'vue'
export default defineComponent({
	setup(props, ctx) {
		return () => (
			<div class='pt-4'>
				<p class='text-2xl'>
					欢迎来到 <strong>Hibana</strong> <span class='text-2xl'>😊</span>
				</p>
			</div>
		)
	}
})
