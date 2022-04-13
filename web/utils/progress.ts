import { h, onMounted, onUnmounted, render } from 'vue'

const css = `
#content_progress {
	/* Positioning */
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 1000;
	width: 100%;
	height: 2px;
	-webkit-appearance: none; 
	appearance: none;
	border: none;
	background-color: transparent;
	color: #a29bfe;
}

#content_progress::-webkit-progress-bar {
		background-color: transparent;
}

#content_progress::-webkit-progress-value {
		background-color: #a29bfe;
}
`

function styleInject(css: string) {
	if (!css || typeof document === 'undefined') {
		return
	}
	const head = document.head || document.getElementsByTagName('head')[0]
	const style = document.createElement('style')
	style.appendChild(document.createTextNode(css))
	head.appendChild(style)
}

const progress = () => h('progress', { id: 'content_progress', value: 0 })

export const usePostProgress = (targetSelector: string, contentSelector: string) => {
	styleInject(css)

	onMounted(() => {
		const target = document.querySelector(targetSelector)!
		const content = document.querySelector(contentSelector)!

		let progressBar: any = document.querySelector('#content_progress')
		if (!progressBar) {
			const div = document.createElement('div')
			target.appendChild(div)
			div.id = 'content_progress_container'
			render(progress(), div)
			progressBar = document.querySelector('#content_progress')
		}

		function onScroll() {
			progressBar.max = content.scrollHeight - content.clientHeight
			progressBar.value = content.scrollTop
		}
		content.addEventListener('scroll', onScroll)

		onUnmounted(() => {
			target.removeChild(document.getElementById('content_progress_container')!)
			content.removeEventListener('scroll', onScroll)
		})
	})
}
