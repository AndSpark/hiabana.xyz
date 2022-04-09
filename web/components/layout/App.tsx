import { defineComponent, onMounted, provide, ref } from 'vue'
import topBar from './topBar/index'
import sideBar from './sideBar/index'
import './main.css'
import { message } from '@andspark/vue-message'
import { useRoute } from 'vue-router'
import usePlugins from '@/plugins'
import { initBg } from '@/utils/theme'

export default defineComponent({
	name: 'Layout',
	components: {
		topBar,
		sideBar
	},
	props: ['fetchData', 'asyncData'],
	setup(props) {
		usePlugins()

		provide('fetchData', props.fetchData)
		provide('asyncData', props.asyncData)
		provide('userConfig', props.fetchData.userConfig)

		const route = useRoute()

		onMounted(() => {
			if (route.path.match(/^\/error/)) {
				message.error('出错辣！')
			} else {
				message.success('欢迎来到Hibana～')
			}
		})

		const { videoBg, videoClass } = initBg()

		return () => (
			<div class='relative overflow-auto bg-black '>
				<video
					ref={videoBg}
					class={videoClass.value}
					autoplay
					loop
					muted
					src={props.fetchData.userConfig.background[0]}
				></video>
				<div class='relative max-w-5xl mx-auto flex flex-col h-screen backdrop-blur-sm bg-slate-300 bg-opacity-90 dark:bg-slate-900  dark:bg-opacity-80 duration-500  shadow-slate-300 shadow-2xl'>
					<topBar></topBar>
					<div class='flex w-full flex-1 overflow-auto'>
						<sideBar class='w-52 sm:block flex-shrink-0 hidden'></sideBar>
						<router-view class='flex-1 h-full overflow-auto' />
					</div>
				</div>
			</div>
		)
	}
})
