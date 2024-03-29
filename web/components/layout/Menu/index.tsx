import { UserConfig } from '../fetch'
import { defineComponent, inject, onMounted, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import './style.css'
import { useSideBarVisible } from '@/hooks/useSideBar'
import { useMask } from '@/hooks/useMask'
import { useRoute } from 'vue-router'
import { PaginateResult, PageModel } from '@mx-space/api-client'
import { isDarkMode } from '../Header'
export default defineComponent({
	setup(props, ctx) {
		const pages = inject<PaginateResult<PageModel>>('pages')!

		const socialList = [
			{
				href: 'https://hibana.xyz',
				icon: 'iconfont icon-link',
			},
			{
				href: 'https://github.com/AndSpark',
				icon: 'iconfont icon-github',
			},
			{
				href: 'mailto:421786477@qq.com',
				icon: 'iconfont icon-email',
			},
		]

		const links = [
			{
				to: '/',
				title: '主页',
			},
			...pages.data.map(v => ({
				to: '/page/' + v.slug,
				title: v.title,
			})),
		]

		const outLinks = [
			{
				a: true,
				to: 'https://doc.hibana.xyz',
				title: 'Lib',
			},
			{
				a: true,
				to: 'https://music.hibana.xyz',
				title: 'Music',
			},
			{
				a: true,
				to: 'https://cv.hibana.xyz',
				title: '关于我',
			},
		]

		const userConfig = inject<UserConfig>('userConfig')!
		const sideBar = ref<HTMLElement>()
		const { sideBarVisible } = useSideBarVisible()
		const route = useRoute()

		function handleRouterLinkClick(path: string) {
			if (path === route.path) {
				return
			}
			sideBarVisible.value = false
		}

		onMounted(() => {
			const { showMask, hideMask } = useMask(sideBar.value!)
			watch(sideBarVisible, visible => {
				if (visible) {
					showMask()
				} else {
					hideMask()
				}
			})
		})
		onClickOutside(sideBar, e => {
			//@ts-ignore
			if (e.path.find(v => v.id === 'menuIcon')) {
				return
			}
			sideBarVisible.value = false
		})

		return () => (
			<div class=' h-full relative  z-50  ' ref={sideBar}>
				<div class='text-center block-bg p-2 relative'>
					<img
						class='w-full mx-auto my-2 dark:opacity-80'
						src={isDarkMode.value ? userConfig.avatar[1] : userConfig.avatar[0]}
					></img>

					<div>Gols</div>
					<div class='flex w-full justify-center mt-2'>
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
							<router-link
								onClick={() => handleRouterLinkClick(v.to)}
								class='sidebar-link'
								to={v.to}
							>
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
	},
})
