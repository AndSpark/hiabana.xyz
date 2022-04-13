import { apiClient } from '@/utils/client'

export interface UserConfig {
	avatar: string[]
	avatarBorder: string[]
	background: string[]
}

let userConfig: any

export default async () => {
	if (userConfig) {
		return { userConfig }
	}
	userConfig = await apiClient.snippet.getByReferenceAndName('root', 'userConfig')

	return { userConfig }
}
