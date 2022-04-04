import { defineComponent } from 'vue'
import { steamIcon } from '../../icon'
import './style.css'
export default defineComponent({
	props: {},
	emits: [],
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
			},
			{
				to: '/',
				title: '关于我'
			},
			{
				to: '/',
				title: '随便写写'
			},
			{
				to: '/',
				title: 'Timeline'
			}
		]

		const border = [
			'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/251110/b8da510860b38f1b5353b300c8c95c3b56df26e2.png',
			'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/85030942387d8c7803922f84c31e82bc42728279.png'
		]

		return () => (
			<div class=' h-full '>
				<div class='text-center block-bg p-2 relative'>
					<img class='absolute w-40 h-40 ml-2 -mt-2 z-10' src={border[0]}></img>
					<img
						class=' w-32 h-32  mx-auto my-2 dark:opacity-80'
						src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1299120/cdce65b4fd94133a12faaf6d43653d1939d2e560.gif'
					></img>

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
			</div>
		)
	}
})
