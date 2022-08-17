import { defineComponent } from 'vue'
export default defineComponent({
	setup(props, ctx) {
		return () => (
			<div class='pt-4'>
				<h3 class='text-2xl'>
					欢迎来到 <strong>Hibana</strong> <span class='text-2xl'>😊</span>
				</h3>
			</div>
		)
	},
})
