import { MenuIcon } from '@/components/icon/menu'
import { defineComponent, ref } from 'vue'

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

const subTitle = ref()
const isShowSubTitle = ref(false)

export const setSubtitle = (title: string, show: boolean = true) => {
	subTitle.value = title
	isShowSubTitle.value = show
}

export default defineComponent({
	components: {
		darkMode
	},
	setup() {
		return () => (
			<div
				class=' h-10 mb-1 relative  shadow dark:shadow-slate-700 bg-slate-300 dark:bg-slate-800 flex w-full items-center px-4 opacity-70 duration-500 overflow-hidden'
				id='topBar'
			>
				<MenuIcon class='mr-2'></MenuIcon>
				<h2 class='dark:text-slate-50'>
					<router-link to='/'>Hibana.xyz</router-link>
				</h2>
				<div class='flex-1'></div>
				<darkMode></darkMode>
				<h3
					class={
						'hidden sm:block absolute  left-52  duration-1000 transform cursor-pointer dark:text-white overflow-hidden text-ellipsis whitespace-nowrap ' +
						(isShowSubTitle.value ? ' translate-y-0.5' : ' translate-y-10')
					}
				>
					{subTitle.value}
				</h3>
			</div>
		)
	}
})
