import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	setup(props, ctx) {
		const route = useRoute()

		return () => <div class='h-full flex justify-center items-center'>{route.query.code}</div>
	}
})
