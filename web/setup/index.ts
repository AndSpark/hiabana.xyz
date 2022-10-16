export function setupPage() {
	if (!__isBrowser__) return
	document.fonts.ready.then(e => {
		console.log(e)
	})
}
