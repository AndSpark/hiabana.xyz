import { ref } from 'vue'

const sideBarVisible = ref(false)

export function useSideBarVisible() {
	return {
		sideBarVisible,
		toggleSideBar() {
			sideBarVisible.value = !sideBarVisible.value
		}
	}
}
