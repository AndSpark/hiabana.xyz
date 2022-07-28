import { defineComponent } from 'vue'

const Image = defineComponent({
	setup() {},
	render() {
		return <img></img>
	}
})

function fecthImage(src: string) {
	return new Promise((resolve, reject) => {
		const image = document.createElement('img')
		image.onload = resolve
		image.onerror = reject
		image.src = src
	})
}
