// Функция для получения одного поста по фрагменту (slug)
import { GET_INFOPAGE_QUERY } from '@/Info/info.queries'
import { graphqlRequest } from '@/shared/lib/graphqlRequest'

export const getInfoPageById = async (id: any): Promise<any> => {
	const variables = { id }
	
	try {
		const resJson: any = await graphqlRequest(GET_INFOPAGE_QUERY, variables)
		console.log(resJson)
		return resJson
	} catch (error) {
		console.error('Ошибка в получении страницы:', error)
		return undefined
	}
}