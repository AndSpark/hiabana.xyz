import { defineComponent, onMounted, provide, Transition } from 'vue'
import TopBar from './topBar/index'
import SideBar from './sideBar/index'
import './main.css'
import { message } from '@andspark/vue-message'
import { useRoute } from 'vue-router'
import usePlugins from '@/plugins'
import { initBg, useNProgress } from '@/utils/init'

export default defineComponent({
	name: 'Layout',
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
		useNProgress()
		return () => (
			<div class='relative overflow-auto bg-black '>
				<video
					ref={videoBg}
					class={videoClass.value}
					autoplay
					loop
					muted
					src={props.fetchData.userConfig?.background?.[0]}
				></video>
				<div class='relative max-w-5xl mx-auto flex flex-col h-screen backdrop-blur-sm bg-slate-300 bg-opacity-90 dark:bg-slate-900  dark:bg-opacity-80   duration-500  shadow-slate-300 shadow-2xl'>
					<TopBar></TopBar>
					<div class=' relative  flex-1 overflow-auto'>
						<SideBar class=' absolute w-52 sm:left-0  -left-52  flex-shrink-0  duration-500'></SideBar>
						<router-view
							class='absolute top-0 sm:left-52 w-full sm:w-[calc(100%-13rem)]  left-0 h-full overflow-auto'
							v-slots={{
								default: ({ Component }: any) => (
									<Transition name='slide-fade' mode='out-in'>
										<Component></Component>
									</Transition>
								)
							}}
						/>
					</div>
				</div>
			</div>
		)
	}
})
