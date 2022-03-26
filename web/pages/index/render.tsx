import { defineComponent } from 'vue'

export default defineComponent({
	props: ['fetchData', 'asyncData'],
	setup(props, ctx) {
		console.log(props)
		return () => <div class='text-lg'>{props.fetchData.data}</div>
	}
})
