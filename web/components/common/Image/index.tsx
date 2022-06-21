import { defineComponent } from 'vue'
class Abc {
	name: string = '123'
	age: number
	title?: string
}

const Image = defineComponent({
	props: {},
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
