import { apiClient } from '@/utils/client'

export interface UserConfig {
	avatar: string[]
	avatarBorder: string[]
	background: string[]
}

export default async () => {
	const data = await apiClient.snippet.getByReferenceAndName('root', 'userConfig')

	return { userConfig: data }
}
