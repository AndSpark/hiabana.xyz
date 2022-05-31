import { ref } from 'vue'

const sideBarVisible = ref(false)

export function useSideBar() {
	return {
		sideBarVisible,
		toggleSideBar: () => {
			sideBarVisible.value = !sideBarVisible.value
		}
	}
}
