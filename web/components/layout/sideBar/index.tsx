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
				icon: 'uil uil-link'
			},
			{
				href: 'https://github.com/AndSpark',
				icon: 'uil uil-github'
			},
			{
				href: 'mailto:421786477@qq.com',
				icon: 'uil uil-envelope-add'
			}
		]

		return () => (
			<div class=' h-full '>
				<div class='text-center block-bg p-2'>
					<video
						class=' w-32 h-32 rounded-full mx-auto'
						autoplay
						loop
						muted
						src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1299120/23f42ff297783336a9f9afaa318a895639005fcf.webm'
					></video>
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
						<p class='sidebar-link'>主页</p>
						<p class='sidebar-link'>关于我</p>
						<p class='sidebar-link'>随便写写</p>
						<p class='sidebar-link'>TimeLine</p>
					</div>
				</div>
			</div>
		)
	}
})
