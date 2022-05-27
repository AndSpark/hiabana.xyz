import { defineComponent, ref } from 'vue'

const line = 'w-4 h-0.5 bg-gray-700 dark:bg-slate-300 rounded-lg duration-500 ease-in-out'
const activeLine1 = (active: boolean) => {
	return active && '-rotate-45 translate-x-[1px] -translate-y-0'
}
const activeLine2 = (active: boolean) => {
	return active && 'rotate-45 translate-x-[1px] translate-y-0'
}

export const MenuIcon = defineComponent({
	setup() {
		const menuOpen = ref(false)
		return () => (
			<div
				class={'relative flex justify-center items-center w-4 h-4 cursor-pointer duration-500'}
				onClick={() => (menuOpen.value = !menuOpen.value)}
			>
				<div
					class={line + (menuOpen.value && ' transform -translate-x-full bg-transparent opacity-0')}
				></div>
				<div
					class={line + ' absolute transform translate-y-[6px] ' + activeLine1(menuOpen.value)}
				></div>
				<div
					class={line + ' absolute transform  -translate-y-[6px] ' + activeLine2(menuOpen.value)}
				></div>
			</div>
		)
	}
})
