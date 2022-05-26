import { defineComponent, ref } from 'vue'
import menu from './index.module.css'

export const MenuIcon = defineComponent({
	setup() {
		const menuOpen = ref(false)

		return () => (
			<div
				class={menu['menu-btn'] + ' ' + (menuOpen.value && menu.open)}
				onClick={() => (menuOpen.value = !menuOpen.value)}
			>
				<div class={menu['menu-btn__burger']}></div>
			</div>
		)
	}
})
