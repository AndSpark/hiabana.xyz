import { UserConfig } from '../fetch'
import { defineComponent, inject, ref } from 'vue'
import { steamIcon } from '../../icon'
import { onClickOutside } from '@vueuse/core'
import './style.css'
import { useSideBar } from '@/hooks/useSideBar'
export default defineComponent({
	components: {
		steamIcon
	},
	setup(props, ctx) {
		const socialList = [
			{
				href: 'https://hibana.xyz',
				icon: 'iconfont icon-link'
			},
			{
				href: 'https://github.com/AndSpark',
				icon: 'iconfont icon-github'
			},
			{
				href: 'mailto:421786477@qq.com',
				icon: 'iconfont icon-email'
			}
		]

		const links = [
			{
				to: '/',
				title: '主页'
			}
		]

		const outLinks = [
			{
				a: true,
				to: 'https://doc.hibana.xyz',
				title: 'Lib'
			},
			{
				a: true,
				to: 'https://music.hibana.xyz',
				title: 'Music'
			},
			{
				a: true,
				to: 'https://cv.hibana.xyz',
				title: '关于我'
			}
		]

		const userConfig = inject<UserConfig>('userConfig')!
		const sideBar = ref(null)
		onClickOutside(sideBar, () => {
			const { sideBarVisible } = useSideBar()
			if (sideBarVisible.value) {
				sideBarVisible.value = false
			}
		})

		return () => (
			<div class=' h-full relative  z-50 ' ref={sideBar}>
				<div class='text-center block-bg p-2 relative'>
					<img class='absolute w-40 h-40 ml-2 -mt-2 z-10' src={userConfig.avatarBorder[0]}></img>
					<img class=' w-32 h-32  mx-auto my-2 dark:opacity-80' src={userConfig.avatar[0]}></img>

					<p>Gols</p>
					<p>
						<a
							href='https://ditu.amap.com/search?query=%E5%AE%81%E6%B3%A2'
							target='blank'
							class='underline-offset-1 underline'
						>
							<i class='uil uil-map-marker'></i>
							Ningbo
						</a>
					</p>
					<div class='flex w-full justify-center'>
						{socialList.map(v => (
							<a href={v.href} target='blank' class='mx-2'>
								<i class={v.icon}></i>
							</a>
						))}
					</div>
				</div>
				<div class='block-bg '>
					<h3 class='text-sm my-2 px-4 text-gray-500'>导航</h3>
					<div>
						{links.map(v => (
							<router-link class='sidebar-link' to={v.to}>
								{v.title}
							</router-link>
						))}
					</div>
				</div>
				<div class='block-bg'>
					<h3 class='text-sm my-2 px-4 text-gray-500'>外链</h3>
					<div>
						{outLinks.map(v =>
							!v.a ? (
								<router-link class='sidebar-link' to={v.to}>
									{v.title}
								</router-link>
							) : (
								<a target='blank' class='sidebar-link' href={v.to}>
									{v.title}
								</a>
							)
						)}
					</div>
				</div>
				<a
					href='https://beian.miit.gov.cn/'
					class=' absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-slate-500     whitespace-nowrap '
					target='_blank'
				>
					浙ICP备2021018226号
				</a>
			</div>
		)
	}
})
