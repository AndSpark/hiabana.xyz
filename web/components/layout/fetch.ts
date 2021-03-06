import { apiClient } from '@/utils/client'
export interface UserConfig {
	avatar: string[]
	avatarBorder: string[]
	background: string[]
}

export interface Hitokoto {
	id: number
	uuid: string
	hitokoto: string
	type: string
	from: string
	from_who: string | null
	creator: string
	creator_uid: number
	reviewer: number
	commit_from: string
	created_at: string
	length: number
}

let userConfig: Record<string, any> = {
	avatar: [
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/cdce65b4fd94133a12faaf6d43653d1939d2e560.gif'
	],
	avatarBorder: [
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/b8da510860b38f1b5353b300c8c95c3b56df26e2.png',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/85030942387d8c7803922f84c31e82bc42728279.png'
	],
	background: [
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/e7399d9e8ee71fcd22c92e59c37b93bfdf3589ac.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/915b1b4a05133186525a956d7ca5c142a3c3c9f3.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/a0f84c0cca796d6d011cb5b9f5033a0bc9071c50.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/7b165fc05e754dfdc31740025d6a55101db8b4b1.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/0ed598ef1ce172de4ff2033632a012ed5ecb10e9.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/a13b8e6ba7b7fefdd089de9946481668de03e4ef.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/897f5568e52dbb501302a3b69c0e5babf078d1e4.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/ca81c5733512be8fa25d90005646b85a61f61975.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/85687190436c55c94e02707531ddb12139b13ebd.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/cf4f9f82f579f3075f81718ca1aaed65478c7efa.webm',
		'https://hibana.oss-cn-shanghai.aliyuncs.com/resource/577d864a2cc8e45659772d09698c1d60621f5d0d.webm'
	]
}
let userConfigLoaded = false
let hitokoto: Hitokoto = {
	id: 5204,
	uuid: '739cb56b-3e22-4dbe-b018-861acf248b2e',
	hitokoto: '??????????????????????????????????????????????????????',
	type: 'k',
	from: '???????????????',
	from_who: null,
	creator: '2247',
	creator_uid: 5148,
	reviewer: 1044,
	commit_from: 'app',
	created_at: '1583290826',
	length: 18
}

export default async () => {
	if (userConfigLoaded) {
		return { userConfig }
	}

	try {
		userConfig = await apiClient.snippet.getByReferenceAndName('root', 'userConfig')
		userConfigLoaded = true
	} catch (error) {}

	return { userConfig, hitokoto }
}
