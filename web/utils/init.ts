import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export function initBg() {
	const videoBg = ref<HTMLVideoElement>()
	const videoBaseClass = 'fixed left-1/2 transform -translate-x-1/2 dark:opacity-50 duration-500'
	const videoClass = ref(videoBaseClass)
	onMounted(() => {
		videoBg.value!.onloadeddata = function () {
			if (window.innerWidth > (videoBg.value!.videoWidth || 1920)) {
				videoClass.value = videoBaseClass + ' h-screen'
			} else {
				videoClass.value = videoBaseClass + ' max-w-min'
			}
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth > (videoBg.value!.videoWidth || 1920)) {
				videoClass.value = videoBaseClass + ' h-screen'
			} else {
				videoClass.value = videoBaseClass + ' max-w-min'
			}
		})
	})

	return {
		videoBg,
		videoBaseClass,
		videoClass
	}
}

export function useNProgress() {
	const router = useRouter()
	NProgress.configure({ parent: '#topBar', showSpinner: false })

	router.beforeEach(() => {
		NProgress.start()
	})
	router.afterEach(() => {
		NProgress.done()
	})
}
