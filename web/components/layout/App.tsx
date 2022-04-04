import { defineComponent, onMounted, provide, ref } from 'vue'
import topBar from './topBar/index'
import sideBar from './sideBar/index'
import { Errors } from '../errors'
import './main.css'
import { message } from '@andspark/vue-message'

export default defineComponent({
	name: 'Layout',
	components: {
		topBar,
		sideBar
	},
	props: ['fetchData', 'asyncData'],
	setup(props) {
		provide('fetchData', props.fetchData)
		provide('asyncData', props.asyncData)
		const normal = [
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1406990/915b1b4a05133186525a956d7ca5c142a3c3c9f3.webm'
		]
		const pureDark = [
			'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/504400/e7399d9e8ee71fcd22c92e59c37b93bfdf3589ac.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1504020/a0f84c0cca796d6d011cb5b9f5033a0bc9071c50.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1299120/7b165fc05e754dfdc31740025d6a55101db8b4b1.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1504020/0ed598ef1ce172de4ff2033632a012ed5ecb10e9.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1385730/a13b8e6ba7b7fefdd089de9946481668de03e4ef.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1299120/897f5568e52dbb501302a3b69c0e5babf078d1e4.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1299120/ca81c5733512be8fa25d90005646b85a61f61975.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1385730/85687190436c55c94e02707531ddb12139b13ebd.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1385730/cf4f9f82f579f3075f81718ca1aaed65478c7efa.webm',
			'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1385730/577d864a2cc8e45659772d09698c1d60621f5d0d.webm'
		]
		const videoBg = ref<HTMLVideoElement>()
		const videoClass = ref('fixed left-1/2 transform -translate-x-1/2 dark:opacity-50 duration-500')

		onMounted(() => {
			message.success('欢迎来到Hibana～')

			videoBg.value!.onloadeddata = function () {
				if (window.innerWidth < videoBg.value!.videoWidth || 1920) {
					videoClass.value += ' h-screen'
				} else {
					videoClass.value += ' max-w-min'
				}
			}
			if (window.innerWidth < videoBg.value!.videoWidth || 1920) {
				videoClass.value += ' h-screen'
			} else {
				videoClass.value += ' max-w-min'
			}
		})

		return () => (
			<div class='relative overflow-auto bg-black '>
				<video ref={videoBg} class={videoClass.value} autoplay loop muted src={pureDark[0]}></video>
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
