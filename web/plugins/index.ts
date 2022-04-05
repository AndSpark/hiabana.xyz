import { getCurrentInstance } from 'vue'
import VMdPreview from './v-md-editor'

export default function usePlugins() {
	const app = getCurrentInstance()!.appContext.app
	app.use(VMdPreview)
}
