// Функция для получения одного поста по фрагменту (slug)
import type { IPageSlugs, IPageSlugsResponse } from '@/Info/info.interface'
import { GET_INFOPAGE_QUERY, GET_PAGE_SLUGS } from '@/Info/info.queries'
import { graphqlRequest } from '@/shared/lib/graphqlRequest'



export const getPageSlugs = async (): Promise<IPageSlugs[] | undefined> => {
	try {
		const resJson: IPageSlugsResponse = await graphqlRequest(GET_PAGE_SLUGS)
		console.log(resJson)
		return resJson.data.pages.nodes
	} catch (error) {
		console.error('Ошибка в получении списка страниц:', error)
		return undefined
	}
}

export const getStaticPaths = async () => {
	const pageSlugs: IPageSlugs[] | undefined = await getPageSlugs()
	
	return {
		paths: !!pageSlugs && pageSlugs.map((slug) => (
			{ params: { slug } }
		)),
		fallback: false
	}
}