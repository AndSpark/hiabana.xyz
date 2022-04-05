//@ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview'
//@ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'

// highlightjs
import hljs from 'highlight.js/lib/core'
// 按需引入语言包
import typescript from 'highlight.js/lib/languages/typescript'

hljs.registerLanguage('typescript', typescript)

VMdPreview.use(githubTheme, {
	Hljs: hljs
})

export default VMdPreview
