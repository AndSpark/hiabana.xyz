import { defineComponent } from 'vue'

export default defineComponent({
	setup(props, ctx) {
		return () => (
			<div class='h-full w-full p-4'>
				<iframe src='https://cv.hibana.xyz' class='h-full w-full opacity-70'></iframe>
			</div>
		)
	}
})
