const MASK_ID = 'hibana-mask'

export function useMask(target: HTMLElement) {
	function showMask() {
		const mask = document.getElementById(MASK_ID)
		mask?.classList.remove('opacity-0', 'pointer-events-none')
	}
	function hideMask() {
		const mask = document.getElementById(MASK_ID)
		mask?.classList.add('opacity-0', 'pointer-events-none')
	}
	let mask = document.getElementById(MASK_ID)
	if (!mask) {
		mask = document.createElement('div')
		mask.id = MASK_ID
		mask.style.position = 'fixed'
		mask.style.top = '0'
		mask.style.left = '0'
		mask.style.width = '100vw'
		mask.style.height = '100vh'
		mask.style.zIndex = '1'
		mask.style.backgroundColor = 'rgba(0,0,0,0.5)'
		mask.classList.add('duration-500', 'opacity-0', 'pointer-events-none')
		target.parentElement!.appendChild(mask)
	}
	return {
		showMask,
		hideMask
	}
}
