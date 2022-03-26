import { defineComponent } from 'vue'
import './main.css'
export default defineComponent({
	setup() {
		return () => <router-view />
	}
})
