import { defineComponent } from 'vue'

export default defineComponent({
	props: ['fetchData'],
	setup(props, ctx) {
		return () => <div>{props.fetchData.data}</div>
	}
})
