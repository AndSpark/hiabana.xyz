const pointer1 = `https://andspark.oss-cn-hangzhou.aliyuncs.com/cursor1.png`
const pointer2 = `https://andspark.oss-cn-hangzhou.aliyuncs.com/cursor2.png`

const addPointer = () => {
	const styleEl = document.createElement('style')
	styleEl.innerHTML = style
	document.body.appendChild(styleEl)
	document.addEventListener('mousedown', e => {
		const target = e.target as HTMLElement
		target.style.cursor = `url(${pointer2}),auto`
	})
	document.addEventListener('mouseup', e => {
		const target = e.target as HTMLElement
		target.style.cursor = ''
	})
	document.oncontextmenu = () => false
}

const style = `
	body {
		cursor: url(${pointer1}), auto ;
	}

  #app button,
  #app a ,
	#app i {
    cursor: url(${pointer1}), auto  ;
  }
}
`

export default addPointer
