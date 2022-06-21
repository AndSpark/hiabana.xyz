import { defineComponent } from "vue"

export function transProps(props:{new(...args:any[]):{}}) {
	return new props()
}

class Abc {
	name: string = '123'
	age:number
	title?: string
}

const abc = new Abc()
const props = {}
for (const key in abc) {
	props[key] = {
		type:
	}
	if (abc[key]) {
		props[key]
	}
}

defineComponent({
	props: {
		name: {
			type: String,
			default: '123',
			required:true
		},
	}
})