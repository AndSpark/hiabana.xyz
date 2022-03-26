import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
	whiteList: ['axios'],
	css: () => {
		return {
			loaderOptions: {
				postcss: {
					options: {},
					plugins: [require('postcss-import'), require('tailwindcss')]
				}
			}
		}
	},
	serverPort: 4444
}

export { userConfig }
