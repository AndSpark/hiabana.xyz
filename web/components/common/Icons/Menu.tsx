import { defineComponent, PropType } from 'vue'

const line = 'w-4 h-0.5 bg-gray-700 dark:bg-slate-300 rounded-lg duration-500 ease-in-out'
const activeLine1 = (active: boolean) => {
	if (active) {
		return '-rotate-45 translate-x-[1px] translate-y-0'
	}
	return 'translate-y-[6px]'
}
const activeLine2 = (active: boolean) => {
	if (active) {
		return 'rotate-45 translate-x-[1px] translate-y-0'
	}
	return '-translate-y-[6px]'
}

export default defineComponent({
	name: 'MenuIcon',
	props: {
		value: {
			type: Boolean,
			required: true
		},
		setValue: {
			type: Function as PropType<(e: boolean) => void>,
			required: true
		}
	},
	setup(props, { emit }) {
		return () => (
			<div
				id='menuIcon'
				class={'relative flex justify-center items-center w-6 h-6 cursor-pointer duration-500'}
				onClick={() => props.setValue(!props.value)}
			>
				<div
					class={line + (props.value && ' transform -translate-x-full bg-transparent opacity-0')}
				></div>
				<div class={line + ' absolute transform  ' + activeLine1(props.value)}></div>
				<div class={line + ' absolute transform   ' + activeLine2(props.value)}></div>
			</div>
		)
	}
})
