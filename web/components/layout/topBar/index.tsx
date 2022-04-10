import { defineComponent, onMounted, ref } from 'vue'

const darkMode = defineComponent({
	setup() {
		const isDarkMode = ref(false)
		if (__isBrowser__) {
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				isDarkMode.value = true
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
		}
		function changeMode() {
			if (isDarkMode.value) {
				isDarkMode.value = false
				document.documentElement.classList.remove('dark')
			} else {
				isDarkMode.value = true
				document.documentElement.classList.add('dark')
			}
		}
		return () => (
			<i
				class={
					'iconfont cursor-pointer dark:text-slate-50 duration-500 ' +
					(isDarkMode.value ? 'icon-moon' : ' icon-sun')
				}
				onClick={changeMode}
			></i>
		)
	}
})

export default defineComponent({
	components: {
		darkMode
	},
	setup() {
		return () => (
			<div
				class=' h-10 mb-1 shadow dark:shadow-slate-700 bg-slate-300 dark:bg-slate-800 flex w-full items-center px-4 opacity-70 duration-500'
				id='topBar'
			>
				<h2 class='dark:text-slate-50'>Hibana.xyz</h2>
				<div class='flex-1'></div>
				<darkMode></darkMode>
			</div>
		)
	}
})
