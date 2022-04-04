import { Errors } from '@/components/errors'
import { defineComponent } from 'vue'

export default defineComponent({
	setup(props, ctx) {
		return () => (
			<div class='h-full flex justify-center items-center'>
				<Errors></Errors>
			</div>
		)
	}
})
