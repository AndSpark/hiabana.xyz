<template>
	<!-- 注：Layout 只会在服务端被渲染，不要在此运行客户端有关逻辑 -->
	<!-- 页面初始化数据注入内容已经过 serialize-javascript 转义 防止 xss -->
	<html>
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="theme-color" content="#000000" />
			<title>{{ webConfig.title }}</title>
			<meta name="description" :content="webConfig.description" />
			<meta name="keyword" :content="webConfig.keyword" />
			<link rel="stylesheet" href="//at.alicdn.com/t/font_3300135_k46v8c8o4gi.css" />
			<slot name="viteClient" />
			<!-- 初始化移动端 rem 设置，如不需要可自行删除 -->
			<!-- <slot name="remInitial" /> -->
			<!-- 用于通过配置插入自定义的 script 为了避免影响期望功能这块内容不做 escape，为了避免 xss 需要保证插入脚本代码的安全性  -->
			<slot name="customeHeadScript" />
			<slot name="cssInject" />
		</head>
		<body>
			<div id="app">
				<slot name="children" />
			</div>
			<slot name="initialData" />
			<slot name="customeFooterScript" />
			<slot name="jsInject" />
		</body>
	</html>
</template>
<script>
export default {
	props: ['ctx', 'fetchData'],
	data() {
		return {
			pathMap: {
				'/': '首页',
				'/detail': '详情页'
			}
		}
	},
	created() {
		console.log(this.fetchData)
	},
	computed: {
		webConfig() {
			return this.fetchData['webConfig']
		}
	},
	methods: {
		pathToTitle(path) {
			// 需要模糊匹配的话可以采用 path-to-regexp 之类的方式
			return this.pathMap[path]
		}
	}
}
</script>
