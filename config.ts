import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
	whiteList: ['axios', '@mx-space/api-client', '@milkdown/core', '@milkdown/vue'],
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
	serverPort: 4444,
	// babelOptions: {
	// 	plugins: ['@babel/plugin-proposal-optional-chaining'] // 通常使用该配置新增 plugin
	// },
	babelExtraModule: [/@mx-space\/api-client/, /milkdown/]
}

export { userConfig }
