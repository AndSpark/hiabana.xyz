import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
	whiteList: ['axios', '@mx-space/api-client', 'nprogress', '@vueuse/core'],
	css: () => {
		return {
			loaderOptions: {
				postcss: {
					options: {},
					plugins: [require('postcss-import'), require('tailwindcss')]
				}
			},
			requireModuleExtension: true
		}
	},
	serverPort: 4444,
	// babelOptions: {
	// 	plugins: ['@babel/plugin-proposal-optional-chaining'] // 通常使用该配置新增 plugin
	// },
	babelExtraModule: [/@mx-space\/api-client/, /nprogress/],
	proxy: {
		'https://server.hibana.xyz/api/v2': {
			target: 'https://server.hibana.xyz/api/v2',
			changeOrigin: true
		}
	},
	chainBaseConfig: chain => {
		chain.module
			.rule('mjs$')
			.test(/\.mjs$/)
			.include.add(/node_modules/)
			.end()
			.type('javascript/auto')
	}
}

export { userConfig }
