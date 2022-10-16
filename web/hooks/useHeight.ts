import { onMounted, onUnmounted } from 'vue'

export function useHeight(id: string) {
	if (!__isBrowser__) return

	const setHeight = () => {
		requestAnimationFrame(() => {
			document.getElementById(id)!.style.height = window.innerHeight + 'px'
		})
	}
	window.addEventListener('resize', setHeight)
	onMounted(() => {
		setHeight()
	})
	onUnmounted(() => {
		window.removeEventListener('resize', setHeight)
	})
}
