import { defineComponent, onMounted, provide, ref, Transition } from 'vue'
import TopBar from './topBar/index'
import SideBar from './sideBar/index'
import './main.css'
import { message } from '@andspark/vue-message'
import { useRoute } from 'vue-router'
import usePlugins from '@/plugins'
import { initBg, useNProgress } from '@/utils/init'
import { useSideBarVisible } from '@/hooks/useSideBar'
import addPointer from '@/utils/pointer'

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
			addPointer()
			if (route.path.match(/^\/error/)) {
				message.error('出错辣！')
			} else {
				message.success('欢迎来到Hibana～')
			}
		})

		const { videoBg, videoClass } = initBg()
		const { sideBarVisible } = useSideBarVisible()
		useNProgress()

		return () => (
			<div class='relative h-screen bg-black overflow-hidden   '>
				<video
					ref={videoBg}
					class={videoClass.value}
					autoplay
					loop
					muted
					src={props.fetchData.userConfig?.background?.[0]}
				></video>
				<TopBar></TopBar>
				<div class='relative max-w-5xl mx-auto  flex flex-col h-full backdrop-blur-sm bg-slate-300 bg-opacity-90 dark:bg-slate-900  dark:bg-opacity-80   duration-500  shadow-slate-300 shadow-2xl'>
					<div class=' relative mt-10 flex-1'>
						<SideBar
							class={
								' absolute overflow-auto w-52 sm:left-0  -left-52  flex-shrink-0  duration-500 ' +
								(sideBarVisible.value &&
									'transform translate-x-52   shadow bg-slate-300 dark:bg-slate-800   ')
							}
						></SideBar>
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
